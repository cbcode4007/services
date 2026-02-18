import Image from "next/image";
import ContactClient from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {

  return (
    <div className="flex min-h-[calc(100vh-56px)] items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 px-4 pt-20">

        {/* Top Details Desktop */}        
        <div className="hidden w-full md:flex flex-col justify-center items-center gap-6">
          
          {/* Profile Picture */}
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden glowing-border">
              <Image
                src="/profile.png"
                alt="Profile"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom Form Desktop, Full Width Mobile*/}
        <div>
          <ContactClient />
        </div>

      </main>
    </div>
  );
}
