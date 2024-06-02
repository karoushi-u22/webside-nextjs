import { SaveData } from "../models/saveData";

/** ゲーム内のセーブデータをテストデータ化したもの */
export const TEST_SAVE_DATA: SaveData = { 
    playerName: 'ぬぬぬーぬ・ぬーぬぬ',
    correctCount: 10,
    incorrectCount: 10,
    overlookCount: 10,
    totalCheckPoint: 30,
    enging: {
        wasReachEnd: true,
        reachEndName: '企業スパイエンド'
    },
    playerSelections: [
        {
            title: 'チュートリアル',
            description: 'この選択肢では、チュートリアル用に必要な情報を問います',
            body: {
                selections: [
                    {
                        title: '選択肢1',
                        playerSelected: true
                    },
                    {
                        title: '選択肢2',
                        playerSelected: false
                    },
                ]
            }

        }
    ]
}
