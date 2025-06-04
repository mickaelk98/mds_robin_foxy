"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { Chewy } from "next/font/google";
import Link from "next/link";
import { useAuthStore } from "@/app/lib/stores/auth-store";


const chewy = Chewy({ subsets: ["latin"], weight: ["400"] });

export function DesktopHeader() {
  const { user } = useAuthStore();


  return (
    <header className="w-full bg-[var(--green-200)] lg:py-12">
      <div className="hidden w-full max-w-7xl mx-auto px-2 lg:flex lg:items-center lg:justify-between">
        <Link href="/"><Image src={logo} alt="logo" width={200} height={50} /></Link>
        <ul className={`flex gap-10 text-2xl uppercase ${chewy.className}`}>
          {user && <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/files">Fiches</Link>
          </li>}
          {user && <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/forum">Forums</Link>
          </li>}
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/faq">FAQ</Link>
          </li>
          {!user && <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/login"> Connexion</Link>
          </li>}
          {!user && <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/signup">Inscription</Link>
          </li>}
          {user && <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="/profil">Profil</Link>
          </li>}
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            <Link href="shops">Boutiques</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
