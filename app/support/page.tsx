import { Metadata } from "next";
import Image from "next/image";
import SupportClient from "./support-client";

export const metadata: Metadata = {
  title: "Support",
};

export default function Solutions() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* The page is naturally one massive column on portrait phone screens, and two rows on desktop screens */}
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-0 gap-8 md:gap-12">

        {/* Left Content Column (Or Lower Central Content Column for mobile, most of the logic is found in about-client.tsx) */}
        <div className="flex flex-1 flex-col items-center md:items-start md:justify-center">
          {/* Desktop-Only Title */}
          <div className="hidden md:flex items-center justify-center sticky top-0 z-10 py-8 w-full">
            <h1 className="text-3xl text-zinc-50">
              IT Support
            </h1>
          </div>

          {/* Calls client-side function wrapper which also contains the bio text box for direct manipulation */}
          <SupportClient />
        </div>

        {/* Right Image Column */}
        <div className="flex relative flex-1 items-center justify-center pt-12">
          <div className="md:w-lg md:h-92 overflow-hidden glowing-border rounded-2xl relative">
            <Image
              src="/how-to-start-a-remote-it-support-business.png"
              alt="IT Support Stock Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </main>
    </div>
  );
}

