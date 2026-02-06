import Image from "next/image";
import ContactClient from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {

  return (
    <div className="flex h-[calc(100vh-56px)] font-sans">
      <main className="flex h-full w-full flex-col">

        {/* Top Details Desktop */}        
        <div className="hidden w-full md:flex flex-col justify-center items-center gap-6 pt-52">
          <h1 className="text-3xl leading-10 tracking-tight text-zinc-50 pb-12">
            Contact Us
          </h1>
        </div>

        {/* Bottom Form Desktop, Full Width Mobile*/}
        <div>
          <ContactClient />
        </div>

      </main>
    </div>
  );
}
