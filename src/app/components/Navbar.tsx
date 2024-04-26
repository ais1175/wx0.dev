import { Button } from "@/components/ui/button"
import { IconHome, IconBrandGithub, IconCode, IconBrandDiscord, IconPhone } from '@tabler/icons-react';
import Link from "next/link";
import {
    Card,
} from "@/components/ui/card"
import { ShoppingBagIcon } from "lucide-react";
import { usePathname } from 'next/navigation'

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
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 flex items-center justify-center gap-10 text-white">

            <Card className="flex p-2 gap-5">

                {
                    navbarContent.map((data, index) => (
                        <Link href={data.redirect}>
                            <Button key={index} variant={usePathname() == data.redirect ? "secondary" : "ghost"} className="rounded-sm">
                                <data.icon className="mr-2 h-4 w-4" /> {data.label}
                            </Button>

                        </Link>


                    ))
                }
            </Card>
        </header>
    )
}