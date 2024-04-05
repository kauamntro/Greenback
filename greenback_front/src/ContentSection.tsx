import { ArrowBigRightIcon } from "lucide-react";
import HeaderMain from "./components/HeaderMain";

interface ContentSectionProps {
    func?: () => void; 
}  

export default function ContentSection ({func}: ContentSectionProps) {

    return (            
        <main className="block w-screen h-screen antialiased bg-image">
            <HeaderMain functionExterna={func}/>
            <section className="block text-white-100 px-48 py-36 select-none h-3/4 ">
            <h1 className="text-6xl font-bold">Make money. <br /> We take care of him.</h1>
            <h2 className="text-2xl font-semibold text-gray-400">Boosting your earnings and management.</h2>
            <button 
            className="border border-green-700 px-4 py-2 mt-6 bg-green-600 rounded flex items-center text-xl text-center cursor-pointer hover:bg-green-700 transition-colors"
            >
                Boost Now <span className="bg-green-700 ml-2 flex p-1 rounded"><ArrowBigRightIcon size={22}/> </span>
            </button>
            </section>
        </main>
    )
}