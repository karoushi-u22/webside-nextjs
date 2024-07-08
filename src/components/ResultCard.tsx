import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface ResultCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    value: string;
}

export default function ResultCard({title, value, className}: ResultCardProps) {
    return (
        <div className={"w-full h-full rounded-md text-[#393939] bg-[#fff] py-2 lg:px-5 shadow-sm "+(className??'')}>
            <h2 className="text-start lg:ml-[5%] mt-[-1.5rem] bg-[#fff] w-fit rounded-md px-5 py-1">{title}</h2>
            <div>
                <p
                className="text-lg">{value}</p>
            </div>
        </div>
    );
}