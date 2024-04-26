"use client";
import Navbar from "../components/Navbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
export default function Home() {

    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-col items-center justify-center h-[20rem]  ">
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Contact Me
                    </h2>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-10 text-left">
                        <p className=" dark:text-white text-black text-2xl max-w-3xl">
                            You can contact me through discord
                        </p>
                    </div>
                    <div className="flex justify-center m-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex gap-3 items-center">
                                        <Image className="rounded-full" src="https://cdn.discordapp.com/avatars/1115986103988650035/6f7014db241024686ea6ccad47cecfa8.png?size=1024" alt="pfp" width={55} height={55} />
                                        <p>wx</p>
                                    </div>
                                </CardTitle>
                                <CardDescription>@00wx</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>User ID: 1115986103988650035</p>
                                <p>Member Since: 2016</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    );
}
