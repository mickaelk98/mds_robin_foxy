import Image from "next/image";
import logo from "@/app/assets/logo.png";
import instagram from "@/app/assets/instagram.png";
import facebook from "@/app/assets/facebook.png";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-2 lg:px-0 translate-y-[-100px] mt-50">
      <div className="w-full flex flex-col md:flex-row mdjustify-between px-4">
        <Image
          src={logo}
          alt="logo"
          className="mx-auto mb-10 md:w-[200px] md:h-[100px]"
        />
        <div className="md:w-[98%] md:flex md:justify-center md:gap-30">
          {/* debut contact */}
          <div className="mb-20">
            <h3 className="font-bold uppercase text-2xl xl:text-3xl mb-4 text-center">
              contact
            </h3>
            <ul className="text-center">
              <li>foxyetrobin@gmail.com</li>
            </ul>
          </div>
          {/* fin contact */}

          {/* debut reseaux */}
          <div className="mb-20">
            <h3 className="font-bold uppercase text-2xl xl:text-3xl mb-4 text-center">
              Réseaux
            </h3>
            <ul className="flex gap-5 md:flex-col items-center justify-center">
              <li className="flex flex-col md:flex-row items-center gap-1">
                <Image
                  src={instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
                <span>@foxy_robin_</span>
              </li>
              <li className="flex flex-col md:flex-row items-center  gap-2">
                <Image
                  src={facebook}
                  alt="facebook"
                  className="cursor-pointer"
                />
                <span>@Roxy Robin</span>
              </li>
            </ul>
          </div>
          {/* fin reseaux */}

          {/* debut autre */}
          <div>
            <h3 className="font-bold uppercase text-2xl xl:text-3xl text-center mb-4">
              autres
            </h3>
            <ul className="text-center flex flex-col gap-2 text-xl">
              <li>Faq</li>
              <li>Nos boutiques</li>
              <li>Mentions légales</li>
              <li>À propos de Foxy</li>
              <li>Assistance</li>
            </ul>
          </div>
          {/* fin autre */}
        </div>
      </div>
    </footer>
  );
}
