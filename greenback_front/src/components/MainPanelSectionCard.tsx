import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

interface MainPanelSectionCardProps {
    Title: string;
    Value: number;
    Percentage: number;
    BgGreen: boolean;
}

export default function MainPanelSectionCard ({ Title, Value, Percentage, BgGreen=false }: MainPanelSectionCardProps) {
    return(
        <li 
            className={`flex flex-col gap-3 p-4 w-60	h-36 rounded-large ${BgGreen ? 'bg-green-500' : 'bg-slate-300 dark:bg-zinc-900'}`}>
            <header><h1 className="text-xl dark:text-gray-400"> {Title} </h1></header>
            <main><h1 className="font-bold text-2xl dark:text-gray-200">$ {Value.toLocaleString('pt-br', {minimumFractionDigits: 2})} </h1></main>
            <footer className="flex flex-row gap-1">
                <span className="text-xs dark:text-gray-400"> <span className="font-bold text-sm">{Percentage}%</span> Increase From Target</span>
                {Percentage > 0 ? <ArrowUp /> : <ArrowDown />}
            </footer>
        </li>
    )
}