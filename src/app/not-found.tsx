"use client";
import { TypewriterEffectSmooth } from "./components/typewriter-effect";
import Link from "next/link";

export default function NotFound() {
    const words = [
        {
            text: "Excuse",
        },
        {
            text: "me,",
        },
        {
            text: "are",
        },
        {
            text: "you",
        },
        {
            text: "lost?",
            className: "text-red-500 dark:text-red-500",
        },
    ];


    return (
        <>
            <main>

                <div className="flex flex-col items-center justify-center h-[40rem]  ">
                    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                        404
                    </p>
                    <TypewriterEffectSmooth words={words} />
                    <p className=" dark:text-white text-black text-xl max-w-3xl">
                        The page you're looking for doesn't exist. Click <Link href="/" className="underline">here</Link> to get to the home page.
                    </p>
                </div>
            </main>
        </>
    );
}
