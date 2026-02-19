import { Metadata } from "next";
import Image from "next/image";
import SupportClient from "./support-client";

export const metadata: Metadata = {
  title: "IT Support",
};

export default function SupportPage() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-0 gap-12">

        {/* Content */}
        <div className="flex flex-1 flex-col items-center md:justify-center md:pb-20">
          <div className="hidden md:hidden w-full py-8">
            <h1 className="text-3xl text-zinc-50">
              IT Support
            </h1>
          </div>

          <SupportClient />
        </div>

        {/* Visual */}
        <div className="flex relative flex-1 items-center justify-center pt-12 md:pt-0">
          <div className="md:w-lg md:h-92 overflow-hidden rounded-2xl relative">
            <Image
              src="/how-to-start-a-remote-it-support-business.png"
              alt="Remote IT support session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </main>
    </div>
  );
}
