import { Bell, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./mode-toggle";
  

export default function MainPanelHeader () {
    return (
        <header className="flex justify-between items-center w-full p-11 h-11">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <div className="flex flex-row itens-center justify-center gap-10">
            <form className="max-w-md mx-auto">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="w-80 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400" placeholder="Search for transaction, item, etc" />
                    
                </div>
            </form>
                <ul className="flex flex-row items-center justify-center gap-6">
                    <li>
                    <Bell size={28} className="hover:fill-green-400 hover:stroke-green-400"/>
                    </li>
                    <li>
                    <MessageCircle size={28} className="hover:fill-green-400 hover:stroke-green-400" />
                    </li>
                    <li>
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    </li>
                    <li>
                      <ModeToggle />
                    </li>
                </ul>
            </div>
        </header>
    )
}