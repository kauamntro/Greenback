import { SquaresFour } from "@phosphor-icons/react";
import { CellSignalFull, File, Gear, SignOut, Wallet } from "@phosphor-icons/react/dist/ssr";

interface SidebarProps {
    func?: () => void; // Defina o tipo da prop como uma função sem parâmetros e sem valor de retorno
}  

export default function SideBarPanel ({func}:SidebarProps) {
    return (
        <nav className="flex flex-col justify-between w-20 h-screen dark:bg-gray-950 bg-slate-100">
            <div className="flex flex-col justify-between p-4 w-20 h-screen dark:bg-gray-950 bg-slate-100 fixed">
                <section className="flex flex-col justify-center items-center gap-16">
                    <button onClick={func}>
                        <img src="src\assets\greenbacks.png" alt="GB" className="w-9 h-9"/>
                    </button>
                    <ul className="flex gap-12 flex-col">
                        <li>
                            <button>
                            <SquaresFour size={24} className="hover:fill-green-400"/>
                            </button>
                        </li>
                        <li>
                            <button>
                            <File size={24} className="hover:fill-green-400" />
                            </button>
                        </li>
                        <li>
                            <button>
                            <CellSignalFull size={24} className="hover:fill-green-400" />
                            </button>
                        </li>
                        <li>
                            <button>
                            <Wallet size={24} className="hover:fill-green-400" />
                            </button>
                        </li>
                    </ul>
                </section>
                <footer className="flex flex-col gap-8 items-center justify-center">
                <button>
                    <Gear size={24} className="hover:fill-green-400" />
                </button>
                <button>
                    <SignOut size={24} className="hover:fill-red-600" />
                </button>
                </footer>
            </div>
        </nav>
    )
}