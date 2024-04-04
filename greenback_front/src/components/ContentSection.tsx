import { ArrowBigRightIcon } from "lucide-react";
import HeaderMain from "./HeaderMain";
import Partners from "./Partners";
import { useState } from "react";

export default function ContentSection () {
    const [logged, setLogged] = useState(false);

    return (
        <main className="block w-screen h-screen antialiased">
            <HeaderMain />
            {
                logged === false ? (
                    <>
                    <section className="block text-white-100 px-48 py-36 select-none h-3/4 bg-image">
                    <h1 className="text-6xl font-bold">Faça dinheiro. <br /> Nós cuidamos dele.</h1>
                    <h2 className="text-2xl font-semibold text-gray-400">Impulsionando seus ganhos, e seu gerenciamento.</h2>
                    <button 
                    className="border border-green-700 px-4 py-2 mt-6 bg-green-600 rounded flex items-center text-xl text-center cursor-pointer hover:bg-green-700 transition-colors"
                    onClick={() => setLogged(!logged)}
                    >
                        Impulsionar agora <span className="bg-green-700 ml-2 flex p-1 rounded"><ArrowBigRightIcon size={22}/> </span>
                    </button>
                    </section>
                    <Partners />
                    </>
                ) : (
                    <>
                    <button onClick={() => setLogged(!logged)}>Se tá logado para bens</button>
                    </>
                )
            }
        </main>
    )
}