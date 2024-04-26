"use client";
import { Badge } from "@/components/ui/badge";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import Footer from "../components/Footer";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
    const Projects = [
        {
            name: "AntiCheat",
            description: "WX AntiCheat is an advanced anticheat system for FiveM that's made to be affordable, but most importantly: functional. Offering stability, security and no subscriptions! Pay once, keep forever. Starting at 19,99$",
            image: "https://anticheat.0wx.space/Escrow/anticheat.png",
            price: "19,99$",
            links: {
                ["Website"]: "https://anticheat.0wx.space",
                ["Forum Post"]: "https://forum.cfx.re/t/update-paid-wx-anticheat-update-3-5-affordable-standalone-anticheat-that-just-works/5104748?u=0wx",
                ["Video Showcase"]: "https://youtu.be/OVaIzPOmo-M?si=OqF3GW8WAq-FCd2O",
                ["Purchase"]: "https://0wx.tebex.io",
            }
        },
        {
            name: "Drug System 2.0",
            description: "Drug System 2.0! This drug system has been completely rewritten from start to ensure that there’s no bugs or other issues. I have released the first version in June 2023 and since then a lot of people purchased this script. Many of them were satisfied, but some of them found some issues that couldn’t be fixed that easily, so I have just decided to rewrite this resource.",
            image: "https://anticheat.0wx.space/Escrow/drugssystem.png",
            price: "18,99$",
            links: {
                ["Forum Post"]: "https://forum.cfx.re/t/release-paid-ox-wx-drugs-2-0-advanced-and-extremely-customizable-drug-system/5126862",
                ["Purchase"]: "https://0wx.tebex.io",
            }
        },
        {
            name: "Drug Selling",
            description: "Advanced Drug Selling script for FiveM, featuring full ox_target support.",
            image: "https://anticheat.0wx.space/Escrow/drugselling.png",
            price: "17,99$",
            links: {
                ["Forum Post"]: "https://forum.cfx.re/t/release-paid-ox-wx-drug-selling/5128468",
                ["Purchase"]: "https://0wx.tebex.io",
            }
        },
        {
            name: "Simple HUD",
            description: "Simple HUD for FiveM, featuring modern look and status icons",
            image: "https://anticheat.0wx.space/Open Source/hud_open.png",
            price: "4,99$",
            links: {
                ["Forum Post"]: "https://forum.cfx.re/t/https://forum.cfx.re/t/paid-esx-wx-hud/5102296",
                ["Purchase"]: "https://0wx.tebex.io",
            }
        },
        {
            name: "Warehouses",
            description: "WX Warehouses is an advanced script for FiveM, built primarily with ox_lib and ox_inventory to handle player-owned warehouses. Players can buy, sell, and modify their warehouses. These warehouses act as storage spaces where permitted players can access the stash of goods stored within.            ",
            image: "https://anticheat.0wx.space/Escrow/warehouses.png",
            price: "19,99$",
            links: {
                ["Forum Post"]: "https://forum.cfx.re/t/paid-esx-custom-wx-warehouses-advanced-player-owned-warehouse-management/5228417",
                ["Purchase"]: "https://0wx.tebex.io",
            }
        },

    ]
    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-col items-center justify-center h-[20rem]  ">
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        My Projects
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-5 m-10">
                    {Projects.map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex gap-5 justify-left items-center justify-left">
                                        <Image src={project.image} width={100} height={100} alt={project.name} />
                                        <h1>{project.name}</h1>
                                        <Badge variant={"outline"}>{project.price == "free" ? "FREE" : project.price}</Badge>
                                    </div>
                                </CardTitle>
                                <CardDescription className="min-w-xl max-w-xl py-5">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex gap-5 items-center justify-center">
                                {Object.entries(project.links).map(([linkName, linkUrl], linkIndex) => (
                                    <Link key={linkIndex} href={linkUrl}>
                                        <Button variant="outline">{linkName}</Button>
                                    </Link>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>






            </main>
            {/* <Footer /> */}
        </>
    );
}
