import { Metadata } from "next";
import Image from "next/image";
import SolutionsClient from "./solutions-client";

export const metadata: Metadata = {
  title: "IT Solutions",
};

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-0 gap-12">

        {/* Content */}
        <div className="flex flex-1 flex-col items-center md:justify-center md:pb-20">
          <div className="hidden md:hidden w-full py-8">
            <h1 className="text-3xl text-zinc-50">
              IT Solutions
            </h1>
          </div>

          <SolutionsClient />
        </div>

        {/* Visual */}
        <div className="flex relative flex-1 items-center justify-center pt-12 md:pt-0">
          <div className="md:w-lg md:h-92 overflow-hidden rounded-2xl relative">
            <Image
              src="/programming-coding---study-online-banner.png"
              alt="Programming laptop"
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
