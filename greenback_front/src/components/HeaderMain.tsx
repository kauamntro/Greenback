import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

  

export default function HeaderMain() {
    const [logged, setLogged] = useState(false);

    function handleUser () {
        setLogged(!logged);
    }

    return (
    <header className="flex justify-around p-4 items-center select-none dark:gb-white antialiased">
        <div className="flex gap-1 items-center justify-center">
            <img src="src\assets\greenbacks.png" alt="GreenBacks" className="w-8 h-8"/>
            <h1 className="text-green-400 text-2xl font-bold">GreenBack</h1>
        </div>
        <ul className="text-lg flex gap-4 font-base items-center">
                {
                logged === false ? (  
                    <>
                    <li>
                     <a href="#" className="hover:text-green-700 transition-colors">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">Associar-se</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">Contato</a>
                    </li>
                    <li className="focus:none hover:none marker:none">
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleUser}>Login / Sign up</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                     <a href="#" className="hover:text-green-700 transition-colors">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">My panel</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">Settings</a>
                    </li>   
                    <li className="focus:none hover:none marker:none">
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/kauamntro.png" />
                            <AvatarFallback>KM</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleUser}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>  
                    </li>
                    </>
                )
                }
            <li>
              <ModeToggle />
            </li>
        </ul>
    </header>
  )
}
