import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { File } from "@/app/components/header-items/file";
import { Forums } from "@/app/components/header-items/forums";
import { Faq } from "@/app/components/header-items/faq";
import { Login } from "@/app/components/header-items/login";
import { Signup } from "@/app/components/header-items/signup";
import { Shops } from "@/app/components/header-items/shops";

export function DesktopHeader() {
  return (
    <header className="hidden lg:flex bg-[var(--green-200)]">
      <ul className="flex items-center jusify-center w-full">
        <li>
          <File />
        </li>
        <li>
          <Forums />
        </li>
        <li>
          <Faq />
        </li>
        <li>
          <Image
            src={logo}
            alt="Logo"
            className="translate-x-[-70px]"
            width={180}
            height={105}
          />
        </li>
        <li>
          <Login />
        </li>
        <li>
          <Signup />
        </li>
        <li>
          <Shops />
        </li>
      </ul>
    </header>
  );
}
