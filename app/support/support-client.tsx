"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupportClient() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-56px)] md:min-h-auto items-center md:items-start font-sans">

      {/* Mobile Header */}
      <div className="flex flex-col items-center gap-4">
        <div className="md:hidden w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="/how-to-start-a-remote-it-support-business.png"
            alt="IT Support"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-center mx-auto text-3xl text-zinc-50 pb-8">
          IT Support
        </h1>
      </div>


      <div className="h-64 w-sm flex flex-col gap-8 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {/* Intro */}
        <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
          We provide reliable, no-nonsense IT support for home users and small
          businesses. Whether your computer is slow, broken, infected, or just
          not behaving the way it should — we help you get back up and running
          quickly and safely.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-zinc-50 font-semibold mb-2">
            What we help with
          </h3>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Slow or unresponsive computers</li>
            <li>Software installation, updates, errors, advice</li>
            <li>Virus and malware removal</li>
            <li>PC setup, upgrades, repairs</li>
            <li>Email, printer, network issues</li>
          </ul>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-zinc-50 font-semibold mb-2">
            How support works
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-zinc-400">
            <li>You contact us and describe the issue (or show it via RustDesk)</li>
            <li>We assess what kind of support is needed, how long it will take, how much it would cost</li>
            <li>We fix the problem while you watch</li>
            <li>You approve everything — no hidden changes or charges</li>
          </ol>
        </div>

        {/* Trust */}
        <p className="text-sm text-zinc-500 leading-relaxed">
          Remote sessions are conducted using RustDesk. You control access at
          all times, and connections can be ended instantly.
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-8">

          <Link href="/contact">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Contact"
                width={28}
                height={28}
              />
              <span className="text-zinc-50">Contact Us</span>
            </div>
          </Link>

          <Link href="/download" target="_blank">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <Image
                src="/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                alt="RustDesk"
                width={28}
                height={28}
              />
              <span className="text-zinc-50">Remote Support</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
