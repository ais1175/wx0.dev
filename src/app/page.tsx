"use client";
import { Badge } from "@/components/ui/badge";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import { TypewriterEffectSmooth } from "./components/typewriter-effect";


export default function Home() {
  const words = [
    {
      text: "An",
    },
    {
      text: "aspiring",
    },
    {
      text: "frontend",
    },
    {
      text: "\"developer\".",
      className: "text-indigo-500 dark:text-indigo-500",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="px-4 py-8 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            Hello, my name is wx.
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex gap-2">
            <Badge variant="secondary">Learning: TypeScript, React, Next.js</Badge>
          </div>
        </div>
        <div className="md:pl-4 mt-4 md:mt-20">
          <div className="flex flex-col md:flex-row justify-center gap-10 text-left max-w-3xl mx-auto">
            <p className="dark:text-white text-sm md:text-lg max-w-full">
              I create resources for <a href="https://fivem.net" className="underline">FiveM</a> that are focused <span className="text-xs p-1">(mostly)</span> on stability and security.
              Aside from that, in my free time I also try to learn new things. Currently, I am learning full-stack web development and practicing graphic design. In fact, this "portfolio" is one of my very first React projects that didn't end up laying on my drive.
            </p>
            <Reviews />
          </div>
        </div>
      </main>



    </>
  );
}
