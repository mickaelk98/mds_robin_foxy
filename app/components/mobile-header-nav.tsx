import { X } from "lucide-react";
import { MobileNavItem } from "@/app/components/mobile-nav-item";
import Link from "next/link";
import { useAuthStore } from "@/app/lib/stores/auth-store";

type Props = {
  closeNav: () => void;
};

export function MobileHeaderNav({ closeNav }: Props) {
  const { user } = useAuthStore();

  return (
    <div className="fixed top-0 left-0 bg-[var(--orange-500)] w-full h-screen z-100 lg:hidden">
      <div>
        <X
          className="absolute top-5 right-5 text-[var(--blue-200)] cursor-pointer"
          size={50}
          onClick={() => closeNav()}
        />
      </div>
      <ul className="w-full h-full flex flex-col items-center justify-center">
        {user && <li><Link href="/files"><MobileNavItem>fiches</MobileNavItem></Link></li>}
        {user && <li><Link href="/forum"><MobileNavItem>forum</MobileNavItem></Link></li>}
        <li><Link href="/faq"><MobileNavItem>faq</MobileNavItem></Link></li>
        {!user && <li><Link href="/signup"><MobileNavItem>inscription</MobileNavItem></Link></li>}
        {!user && <li><Link href="/login"><MobileNavItem>connexion</MobileNavItem></Link></li>}
        <li><Link href="/shops"><MobileNavItem>boutiques</MobileNavItem></Link></li>
      </ul>
    </div>
  );
}
