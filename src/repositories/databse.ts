import { TEST_SAVE_DATA } from "../consts/testData";
import { SaveData, UserDataTable } from "../models/saveData";
import D1Wrapper from "cloudflare-d1-wrapper";

/**
 * ログインした情報からゲーム側のセーブデータを取得し、構造化する関数
 * @argument isTest ローカルのテストデータを取得するか
 * @returns saveData
 */
export async function getSaveData(isTest?: boolean): Promise<SaveData | undefined> {
    // ローカルのテストデータ取得用
    if (isTest) return TEST_SAVE_DATA; 

    // TODO: 現状テスト用のsteam IDを入れているため、ログイン時に取得したJWTからの取得に要切り替え
    const steamId = '123456789';

    const instance = new D1Wrapper(process.env.CLOUDFLARE_API_KEY ?? '');
    const queryResult = await instance.getQueryResponse<UserDataTable>(
        process.env.CLOUDFLARE_USER_ID ?? '',
        process.env.CLOUDFLARE_DB_ID ?? '',
        'SELECT * FROM userdata WHERE steam_id = ?',
        [steamId]
    );
    
    /**
     * SQLインジェクションが発生した時の為取得したデータとの差異がないか確認
     */
    if (queryResult.result[0].results[0].steamId == steamId) return;

    let result: SaveData;

    /**
     * DB側に登録されたデータの精査
     */
    try {
        result = JSON.parse(queryResult.result[0].results[0].savedata);
    } catch (error) {
        console.log(error);
        throw SyntaxError('データベースに登録されたデータに問題がある可能性があります。');
    }

    return result;
}

