import { Button } from "@/components/ui/button"
import { IconHome, IconBrandGithub, IconCode, IconBrandDiscord, IconPhone, IconMenu2, IconX } from '@tabler/icons-react';
import Link from "next/link";
import {
    Card,
} from "@/components/ui/card"
import { Database, ShoppingBagIcon } from "lucide-react";
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
const navbarContent = [
    {
        label: "Home",
        icon: IconHome,
        redirect: "/"
    },
    {
        label: "My Projects",
        icon: IconCode,
        redirect: "/projects"
    },
    {
        label: "Contact",
        icon: IconPhone,
        redirect: "/contact"
    },
    {
        label: "GitHub",
        icon: IconBrandGithub,
        redirect: "https://github.com/nwvh"
    },
    {
        label: "Tebex Store",
        icon: ShoppingBagIcon,
        redirect: "https://0wx.tebex.io"
    },
    {
        label: "Discord Server",
        icon: IconBrandDiscord,
        redirect: "https://dsc.gg/wxscripts"
    },
]


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 flex items-center justify-between md:justify-center gap-10 text-white">
            <div className="md:hidden">
                {/* Hamburger menu icon */}
                <button className="text-white" onClick={toggleMenu}>
                    {!isOpen ? <IconMenu2 /> : <IconX />}
                </button>
                {isOpen && (
                    <Command>
                        <CommandInput placeholder="Search pages..." />
                        <CommandList>
                            <CommandEmpty>No pages found.</CommandEmpty>
                            <CommandGroup heading="Pages">
                                {
                                    navbarContent.map((data, index) => (
                                        <Link href={data.redirect} key={index}>
                                            <CommandItem><data.icon className="mr-2 h-4 w-4" /> {data.label}</CommandItem>
                                        </Link>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                )}
            </div>

            {/* Fullscreen dropdown menu */}

            {/* Regular navbar */}
            <Card className="hidden md:flex p-2 gap-5 flex-wrap md:flex-nowrap md:gap-0 md:justify-center">
                {
                    navbarContent.map((data, index) => (
                        <Link href={data.redirect} key={index}>
                            <Button variant={usePathname() == data.redirect ? "secondary" : "ghost"} className="rounded-sm mb-2 md:mb-0">
                                <data.icon className="mr-2 h-4 w-4" /> {data.label}
                            </Button>
                        </Link>
                    ))
                }
            </Card>
        </header>


    )
}