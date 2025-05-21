import { X } from "lucide-react";
import { MobileNavItem } from "@/app/components/mobile-nav-item";

type Props = {
  closeNav: () => void;
};

export function MobileHeaderNav({ closeNav }: Props) {
  const menu = [
    "fiches",
    "forum",
    "faq",
    "inscription",
    "connexion",
    "boutiques",
  ];

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
        {menu.map((item, index) => (
          <li key={index}>
            <MobileNavItem>{item}</MobileNavItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
