import Image from "next/image";
import logo from "@/app/assets/logo.png";
// import { File } from "@/app/components/header-items/file";
// import { Forums } from "@/app/components/header-items/forums";
// import { Faq } from "@/app/components/header-items/faq";
// import { Login } from "@/app/components/header-items/login";
// import { Signup } from "@/app/components/header-items/signup";
// import { Shops } from "@/app/components/header-items/shops";

export function DesktopHeader() {
  return (
    <header className="w-full bg-[var(--green-200)] py-4">
      <div className="hidden w-full max-w-7xl mx-auto px-2 lg:px-0 lg:flex lg:items-center lg:justify-between">
        <Image src={logo} alt="logo" className="w-[200px] h-[100px]" />
        <ul className="flex gap-10 text-xl uppercase">
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Fiches
          </li>
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Forum
          </li>
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Faq
          </li>
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Connexion
          </li>
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Inscription
          </li>
          <li className="cursor-pointer border-b-4 border-[var(--green-200)] hover:border-[var(--orange-200)] hover:font-bold">
            Boutiques
          </li>
        </ul>
      </div>
    </header>
  );
}
