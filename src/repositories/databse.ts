import { getServerSession } from 'next-auth';
import { TEST_SAVE_DATA } from '../consts/testData';
import { SaveData, UserDataTable } from '../models/saveData';
import D1Wrapper from 'cloudflare-d1-wrapper';

/**
 * ログインした情報からゲーム側のセーブデータを取得し、構造化する関数
 * @argument isTest ローカルのテストデータを取得
 * @returns saveData
 */
export async function getSaveData(isTest?: boolean): Promise<SaveData | undefined> {
    // ローカルのテストデータを返す
    if (isTest) return TEST_SAVE_DATA; 

    const session = await getServerSession();
    /**
     * セッションがない場合
     */
    if (!session) return undefined;

    const steamId = session.user?.email?.split('@')[0];
    const instance = new D1Wrapper(process.env.CLOUDFLARE_API_KEY ?? '');

    /**
     * D1へのクエリを送信
     */
    const queryResult = await instance.getQueryResponse<UserDataTable>(
        process.env.CLOUDFLARE_USER_ID ?? '',
        process.env.CLOUDFLARE_DB_ID ?? '',
        'SELECT * FROM userdata WHERE steam_id = ?',
        [steamId ?? '0']
    );
    
    if (!queryResult.result || !steamId) {
        // TODO: できればエラーをスローしたい。
        console.log('Response or SteamID is undefined.');
        return undefined;
    }

    /**
     * SQLインジェクションが発生した時の為取得したデータとの差異がないか確認
     */
    if (queryResult.result[0].results[0].steam_id != steamId) return;

    
    /**
     * DB側に登録されたデータの精査
    */
    try {
        return JSON.parse(queryResult.result[0].results[0].savedata);
    } catch (error) {
        console.log(error);
        throw SyntaxError('データベースに登録されたデータに問題がある可能性があります。');
    }
}

