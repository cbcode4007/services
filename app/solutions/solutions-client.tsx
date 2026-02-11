"use client";

import Image from "next/image";
import Link from "next/link";

export default function SolutionsClient() {
  return (
    <div className="flex flex-col gap-8 max-w-md md:max-w-lg">

      {/* Mobile Header */}
      <div className="md:hidden flex flex-col items-center gap-4 pt-28">
        <div className="w-56 h-56 rounded-full overflow-hidden">
          <Image
            src="/programming-coding---study-online-banner.png"
            alt="IT Solutions"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl tracking-wide text-zinc-50">
          IT Solutions
        </h2>
      </div>

      {/* Intro */}
      <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
        We design and build custom software solutions that solve real problems — from automating internal workflows to delivering polished customer-facing applications.
      </p>

      {/* Tech Stack */}
      <div>
        <h3 className="text-zinc-50 font-semibold mb-2">
          Our tech stack
        </h3>
        <ul className="list-disc list-inside space-y-1 text-zinc-400">
          <li>Python</li>
          <li>Flutter Dart</li>
          <li>Next.js</li>
          <li>SQL</li>
          <li>OpenAI API</li>
        </ul>
      </div>

      {/* Platforms */}
      <div>
        <h3 className="text-zinc-50 font-semibold mb-2">
          Our platforms
        </h3>
        <ul className="list-disc list-inside space-y-1 text-zinc-400">
          <li>Desktop</li>
          <li>Mobile</li>
          <li>Web</li>          
        </ul>
      </div>

      <p className="text-base md:text-lg leading-7 md:leading-8 text-zinc-400">
        Whether you’re improving an existing process or building something new from the ground up, we focus on clarity, reliability, and long-term maintainability.
      </p>

      {/* CTAs */}
      <div className="flex flex-row gap-8 pt-8">

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

        <Link href="/projects" target="_blank">
          <div className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            <Image
              src="/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Projects"
              width={28}
              height={28}
            />
            <span className="text-zinc-50">View Projects</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
