import { TEST_SAVE_DATA } from "../consts/testData";
import { SaveData } from "../models/saveData";

/**
 * ログインした情報からゲーム側のセーブデータを取得し、構造化する関数
 * @returns saveData
 */
export function getSaveData(): SaveData {
    const result = TEST_SAVE_DATA;
    return result;
}