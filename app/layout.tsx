import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add both constant, and variable Metadata, for site details that can change such as selected page
export const metadata: Metadata = {
  title: {
    default: "CBITC",
    template: "%s | CBITC",
  },
  description:
    "Landing page for Colin Bond IT Consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen overflow-hidden select-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        {/* Consistent wallpaper across site */}
        <div className="min-h-screen font-sans bg-linear-to-b from-black to-transparent relative">
          <Header />
          <Image
            src="/KHdh18x.gif"
            alt="background"
            fill
            className="unoptimized object-cover absolute inset-0 -z-10 opacity-10"
            unoptimized={true}
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
