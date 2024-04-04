import { SquaresFour } from "@phosphor-icons/react";
import { CellSignalFull, File, Gear, SignOut, Wallet } from "@phosphor-icons/react/dist/ssr";

export default function SideBarPanel () {
    return (
        <nav className="flex flex-col justify-between p-4 w-20 h-screen dark:bg-neutral-950 bg-slate-100">
            <section className="flex flex-col justify-center items-center gap-16">
                <header>
                    <img src="src\assets\greenbacks.png" alt="GB" className="w-9 h-9"/>
                </header>
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
        </nav>
    )
}