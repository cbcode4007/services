import { Metadata } from "next";
import Image from "next/image";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex flex-col w-full mx-auto gap-8">
          {/* Calls client-side function wrapper which also contains the bio text box for direct manipulation */}
          <AboutClient />
      </main>
    </div>
  );
}
