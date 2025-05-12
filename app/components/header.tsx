"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Header() {
  const [mobileNaveOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="py-5 flex items-center justify-between w-full max-w-7xl mx-auto px-2 lg:px-0">
      {/* <Image src="/logo.png" alt="Logo" width={100} height={100} /> */}
      <p className="text-3xl xl:text-5xl font-bold text-primary">
        Foxy et Robin
      </p>
      <Menu
        className="md:hidden cursor-pointer text-primary"
        size={40}
        onClick={() => setMobileNavOpen(true)}
      />
      {/* mobile nav */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-primary z-50 text-white ${
          mobileNaveOpen ? "block" : "hidden"
        }`}
      >
        <X
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setMobileNavOpen(false)}
          size={40}
        />
        <ul className="flex flex-col items-center justify-center gap-10 text-2xl h-screen">
          <li className="cursor-pointer">Accueil</li>
          <li className="cursor-pointer">Forum</li>
          <li className="cursor-pointer">Guides</li>
          <li className="cursor-pointer">Profile</li>
        </ul>
      </nav>
    </header>
  );
}
