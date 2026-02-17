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
      <div className="flex flex-col min-h-[calc(100vh-56px)] items-center justify-center font-sans pt-24 md:pt-2">
      

        {/* Top Picture and Title */}
        <div className="flex pb-8">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden glowing-border">
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
        <div className="flex-1 overflow-y-auto px-2 max-h-92 w-sm md:w-lg scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
            Colin Bond IT Consulting is dedicated to meeting your IT needs with reliable, high-quality service at an affordable cost—whether through hands-on technical support or custom software development. Founded in 2026 and backed by extensive education and practical experience, CBITC was created to offer a friendly, approachable alternative to larger IT firms: a partner you can speak with directly, trust over time, and rely on for all your computing needs.
          </p>
        </div>
      </div>
    </>
  );
}
