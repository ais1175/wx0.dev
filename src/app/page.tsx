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
      <main>
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            Hello, my name is wx.
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex gap-2">
            <Badge variant="secondary">Learning: TypeScript, React, Next.js</Badge>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-10 text-left">
            <p className=" dark:text-white text-black text-2xl max-w-3xl">
              I create resources for <a href="https://fivem.net" className="underline">FiveM</a> that are focused <span className="text-sm p-2">(mostly)</span> on stability and security.
              Aside from that, in my free time I also try to learn new things, as of right now I am learning fullstack web development and practice graphical design. Matter of fact, this "portfolio" is one of my very first react projects that
              didn't ended up laying on my drive.
            </p>
            <Reviews />
          </div>

        </div>
      </main>
    </>
  );
}
