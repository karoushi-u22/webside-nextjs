/**
 * D1上のテーブル形式を構造として保持するインタフェース
 */
export interface UserDataTable {
    id: number,
    steam_id: string, /** ゲームにて保存されたセーブデータ紐付けのsteamID */
    savedata: string /** パース前の為string */
}

/**
 * ゲーム側のセーブデータ構造を保持するインタフェース
 */
export interface SaveData {
    playerName?: string, /** ゲーム内でのプレイヤー名 */
    correctCount: number, /** 間違いを正しく指摘できた率 */
    incorrectCount: number, /** 間違っていない箇所を指摘した率 */
    overlookCount: number, /** 間違いを見逃した率 */
    totalCheckPoint: number, /** チェックする箇所の合計数 */
    ending: { /** 最終到達エンディング */
        wasReachEnd: boolean, /** エンディングに到達しているか */
        reachEndName?: string /** 到達したエンディングの名前 */
    },
    playerSelections: PlayerSelection[] /** プレイヤーの選択した分岐の一覧 */
}

/**
 * ストーリー上で出てきた選択を保持するインタフェース
 */
export interface PlayerSelection {
    title: string,
    description: string,
    body: {
        selections: selection[]
    }
}

/**
 * プレイヤーの選択肢を保持するインタフェース
 */
export interface selection {
    title: string,
    playerSelected: boolean
}