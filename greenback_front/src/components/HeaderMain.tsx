import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

interface HeaderMainProps {
    functionExterna?: () => void;
}  

export default function HeaderMain({functionExterna}: HeaderMainProps) {
    const [logged, setLogged] = useState(false);

    function handleUser() {
        setLogged(!logged);
    }
    

    return (
    <header className="flex justify-around p-4 items-center select-none dark:gb-white antialiased">
        <button 
        className="flex gap-1 items-center justify-center"
        onClick={functionExterna}
        >
            <img src="src\assets\greenbacks.png" alt="GreenBacks" className="w-8 h-8"/>
            <h1 className="text-green-400 text-2xl font-bold">GreenBack</h1>
        </button>
        <ul className="text-lg flex gap-4 font-base items-center">
                {
                logged === false ? (  
                    <>
                    <li>
                     <a href="#" className="hover:text-green-700 transition-colors">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">Be partner</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-700 transition-colors">Contact</a>
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
                            <DropdownMenuItem 
                            onClick={handleUser}
                            >Login / Sign up</DropdownMenuItem>
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
                        <DropdownMenuItem onClick={functionExterna}>Dashboard</DropdownMenuItem>
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
