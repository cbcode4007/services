"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";
import DropdownLink from "./dropdownlink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header Area */}
      <header className="fixed top-0 z-50 w-full pl-8 pr-3 py-8 md:pr-8">
        <div className="mx-auto flex h-14 w-full items-center justify-between select-none">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={108}
              height={108}
              className="object-contain transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:scale-110"
            />
          </Link>
          
          {/* Desktop Title */}
          <h1 className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:text-2xl text-base md:leading-10 leading-tight tracking-wide text-zinc-50 px-2 uppercase">
            <span className="first-letter:text-xl md:first-letter:text-3xl">Colin</span>&nbsp;
            <span className="first-letter:text-xl md:first-letter:text-3xl">Bond</span>&nbsp;
            <span className="text-xl md:text-3xl">IT</span>&nbsp;
            <span className="first-letter:text-xl md:first-letter:text-3xl">Consultation</span>
          </h1>

          {/* Mobile Title */}
          <h1 className="flex md:hidden absolute left-1/2 -translate-x-1/2 text-base leading-tight tracking-wide text-zinc-50 px-2 uppercase">
            <span className="text-2xl">CBITC</span>&nbsp;
          </h1>          

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <DropdownLink/>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Mobile Hamburger Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>          

        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-black border-r border-zinc-800
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6 gap-8">
          {/* Header Logo in Drawer */}
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          {/* Drawer Nav Column */}
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <NavLink href="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
            <DropdownLink/>
            <NavLink href="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
}
