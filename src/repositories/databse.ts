import { TEST_SAVE_DATA } from "../consts/testData";
import { SaveData } from "../models/saveData";

/**
 * ログインした情報からゲーム側のセーブデータを取得し、構造化する関数
 * @returns saveData
 */
export async function getSaveData(): SaveData {
    // TODO: ゲーム側のセーブデータを取得するようにする。
    const result = TEST_SAVE_DATA;
    return result;
}