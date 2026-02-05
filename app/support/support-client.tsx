"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SupportClient() {
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
      {/* Mobile */}
      <div className="flex flex-col min-h-screen pt-28 md:hidden">

        {/* Top Picture and Title */}
        <div className="sticky top-28 z-10 bg-black px-6 pb-7">
          <div className="flex flex-col items-center gap-4">
            <div className="w-64 h-64 rounded-full overflow-hidden glowing-border">
              <Image
                src="/how-to-start-a-remote-it-support-business.png"
                alt="IT Support Stock Image"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl tracking-wide text-zinc-50">
              IT Support
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-16 max-h-64 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <p className="mt-4 text-base leading-7 text-zinc-400">
            If there is any problem you're having with your PC, you've come to the right place. Our experts will do whatever it takes to get it working again, at speed, without compromising what isn't broken.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div
        /* Scrolling Logic Reference for Div */
        ref={contentRef}

        className="hidden md:flex flex-1 w-full max-h-[20vh] flex-col items-center
                   scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
                   px-2 md:scroll-smooth"
      >
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400 pb-8">
          If there is any problem you've been having with your PC, you've come to the right place. Our experts will do whatever it takes to get it working again, at speed, without compromising what isn't broken.
        </p>
                      
      </div>

      <div className="hidden md:flex flex-row gap-8 px-12">

          <Link href="/contact">
            <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Phone Icon"
                width={32}
                height={32}
                className="object-contain"                  
              />
              <p className="max-w-md text-m leading-8 text-zinc-50 hover:text-white">
                Contact Us
              </p>
            </div>
          </Link>
          <Link href="/download">
            <div className="flex flex-row gap-2 transition-all duration-300 ease-out hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/download_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Download Icon"
                width={32}
                height={32}
                className="object-contain"                  
              />
              <p className="max-w-md text-m leading-8 text-zinc-50 hover:text-white">
                Download Rustdesk
              </p>
            </div>
          </Link>

        </div>  
    </>
  );
}
