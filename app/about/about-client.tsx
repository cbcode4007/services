"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutClient() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  /* Desktop Scroll Logic (Overflowing Left Content Column can be scrolled from anywhere the cursor is) */
  useEffect(() => {
    {/* Get passed div to route all scrolling to or bail */}
    const el = contentRef.current;    
    if (!el) return;

    {/* Decide if scrolling should happen based on overflow (if the total height exceeds the visible height to the client) */}
    function shouldForward() {
      return el!.scrollHeight > el!.clientHeight;
    }

    {/* Scroll by mouse wheel delta */}
    function onWheel(e: WheelEvent) {
      if (!shouldForward()) return;
      e.preventDefault();
      el!.scrollBy({ top: e.deltaY });
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-56px)] items-center justify-center font-sans pt-24">
      

        {/* Top Picture and Title */}
        <div className="flex pb-6">
          <div className="flex flex-col gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden glowing-border">
              <Image
                src="/profile.png"
                alt="Profile"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-center mx-auto text-3xl text-zinc-50">
              About Us
            </h1>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-2 max-h-92 w-sm md:w-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
            Welcome to our landing page. Colin Bond IT Consulting is dedicated to addressing your IT needs affordably and with quality, be it through tech support or software development. Starting in 2026 with extensive prior education and experience, CBITC aims to be a friendly alternative to larger IT companies who you can talk to and grow to rely on for PC matters of all kinds.
          </p>
        </div>
      </div>
    </>
  );
}
