import ResultCard from "./ResultCard";
import { SaveData } from "@/models/saveData";

type ResultProps = {
    save: SaveData;
}

export default function Result({save}: ResultProps) {

    // 百分率での正答率に変換
    const correctRatio = Math.round((save.correctCount / save.totalCheckPoint)*100);
    
    // fontの追加は後で対応
    return (
        <div className="grid text-center p-3 lg:w-[70%] mx-auto">
            <div className="mb-5 lg:mb-10">
                <h2 className="text-[2rem] font-bold">結果</h2>
            </div>
            <div className="grid grid-col-4 lg:grid-cols-3 gap-5 gap-y-10">
                <ResultCard className="col-span-3 lg:col-span-2" title={"プレイヤー名"} value={save.playerName?? 'PlayerName'}/>
                <ResultCard className="col-span-1" title={"正答率"} value={correctRatio.toString()+'%'}/>
                <ResultCard className="col-span-4 lg:col-span-3" title={"エンディング名"} value={save.ending.reachEndName??'endName'}/>
            </div>
        </div>
    );
}