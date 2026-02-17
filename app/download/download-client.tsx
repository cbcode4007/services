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
        
        <div className="flex-1 pb-16 max-h-64 max-w-lg">
          <p className="text-base leading-7 text-zinc-400">
            RustDesk is a secure, open-source remote desktop application that allows us to view or interact with your computer during a live support session.
We use it strictly for real-time assistance—there is no hidden activity, no permanent access, and no background connection once the session ends.

You remain in full control at all times and may disconnect whenever you feel uncomfortable. We will always ask for your explicit permission before making any changes to your device.

For your safety, please download RustDesk only from the <a href="https://rustdesk.com" target="_blank" className="text-white underline transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">official website</a>.
          </p>                              
        </div>

        <h3 className="mx-auto text-2xl text-zinc-50 pt-4 pb-2">
            Installation
        </h3>

        <div className="flex flex-1 py-2 gap-4 w-full max-h-41 max-w-lg flex-col items-start overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="flex flex-row">
              <h3 className="font-semibold">1.</h3> 
              <p className="text-base text-zinc-400 px-2">
                  Visit rustdesk.com. Use the link above to ensure you are downloading from the official source.
              </p>    
          </div>
          <div className="flex flex-row">
              <h3 className="font-semibold">2.</h3> 
              <p className="text-base text-zinc-400 px-2">
                  Click “Download” and choose the version for your system. Select the installer that matches your computer. If you're unsure which option to choose, we’ll gladly guide you during the call.
              </p>    
          </div>
          <div className="flex flex-row">
              <h3 className="font-semibold">3.</h3> 
              <p className="text-base text-zinc-400 px-2">
                  Run the installer. Follow the setup steps. We may ask you to adjust a few settings so the session works properly.
              </p>                    
          </div>  
          <div className="flex flex-row">
              <h3 className="font-semibold">4.</h3> 
              <p className="text-base text-zinc-400 px-2">
                  Share your ID and one-time password. RustDesk will display a temporary access code. Provide this to us so we can connect and assist you.
              </p>    
          </div>          
        </div>
      </div>
    </>
  );
}
