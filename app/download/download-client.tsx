"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function DownloadClient() {
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
      <div className="flex flex-col min-h-screen pt-28 items-center">

        {/* Top Picture and Title */}
        <div className="flex pb-6">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/rustdesk-b8wsdurelja5vqgmzvdd6.png"
                alt="RustDesk Logo"
                width={256}
                height={256}
                className="invert w-full h-full object-cover"
              />
            </div>
            <h2 className="text-center mx-auto text-2xl text-zinc-50 pt-2">
              About RustDesk
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 pb-16 max-h-64 max-w-lg">
          <p className="text-base leading-7 text-zinc-400">
            RustDesk is a secure, transparent open-source remote desktop client. We use it to see or interact with clients' PCs from a distance during our live support sessions. At any point, you may disconnect if you feel uncomfortable with the process, as we do not keep anything we do hidden, nor any permanent access, and will always initially need explicit permission to change your device at all. For your safety, please download it from the <a href="https://rustdesk.com" target="_blank" className="text-white underline transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">official site</a>.
          </p>

          <h3 className="text-center mx-auto text-2xl text-zinc-50 pt-6">
            Installation
          </h3>                    
        </div>

        <div className="flex flex-1 py-2 gap-4 w-full max-h-[20vh] max-w-lg flex-col items-start">
            <div className="flex flex-row">
                <h3 className="font-semibold">1.</h3> 
                <p className="text-base text-zinc-400 px-2">
                    Navigate to rustdesk.com or click the official site hyperlink above.
                </p>    
            </div>
            <div className="flex flex-row">
                <h3 className="font-semibold">2.</h3> 
                <p className="text-base text-zinc-400 px-2">
                    Click Download and choose an installer fit for your PC architecture. We are able to explain this with further depth in call.
                </p>    
            </div>
            <div className="flex flex-row">
                <h3 className="font-semibold">3.</h3> 
                <p className="text-base text-zinc-400 px-2">
                    Go through the installer and change settings as instructed.
                </p>                    
            </div>  
            <div className="flex flex-row">
                <h3 className="font-semibold">4.</h3> 
                <p className="text-base text-zinc-400 px-2">
                    Pass us the ID and temporary access code shown so we can work together.
                </p>    
            </div>          
        </div>
      </div>
    </>
  );
}
