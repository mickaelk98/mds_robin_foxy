import Image from "next/image";
import logo from "@/app/assets/logo.png";
import instagram from "@/app/assets/instagram.png";
import facebook from "@/app/assets/facebook.png";
import { Chewy } from "next/font/google";
import { FooterSvg } from "@/app/components/wave/footer-svg";
import Link from "next/link";

const chewy = Chewy({
  subsets: ["latin"],
  weight: ["400"],
});

export function Footer() {
  return (
    <>
      <FooterSvg />
      <footer className="bg-[var(--background)]">
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0 lg:py-10">
          <div className="w-full flex flex-col lg:flex-row mdjustify-between px-4">
            <Image
              src={logo}
              alt="logo"
              className="mx-auto mb-10 md:w-[200px] md:h-[100px]"
            />
            <div className="md:w-[98%] lg:flex md:justify-center lg:gap-30">
              {/* debut contact */}
              <div className="mb-20 xl:mb-0">
                <h3
                  className={`font-bold uppercase text-2xl xl:text-3xl mb-4 text-center ${chewy.className}`}
                >
                  contact
                </h3>
                <ul className="text-center">
                  <li>foxyetrobin@gmail.com</li>
                </ul>
              </div>
              {/* fin contact */}

              {/* debut reseaux */}
              <div className="mb-20 xl:mb-0">
                <h3
                  className={`font-bold uppercase text-2xl xl:text-3xl mb-4 text-center ${chewy.className}`}
                >
                  Réseaux
                </h3>
                <ul className="flex gap-5 md:flex-col items-center justify-center">
                  <li className="flex flex-col md:flex-row items-center gap-1">
                    <Link
                      href="https://www.instagram.com/foxy_robin_/profilecard/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="instagram"
                        className="cursor-pointer"
                      />
                      <span>@foxy_robin_</span>
                    </Link>
                  </li>
                  <li className="flex flex-col md:flex-row items-center  gap-2">
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/people/Roxy-Robin/61576403632725/?mibextid=wwXIfr&rdid=88nPvNCucPJvpGs0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18qCvs91Go%2F%3Fmibextid%3DwwXIfr"
                    >
                      <Image
                        src={facebook}
                        alt="facebook"
                        className="cursor-pointer"
                      />
                      <span>@Roxy Robin</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* fin reseaux */}

              {/* debut autre */}
              <div className="mb-20 xl:mb-0">
                <h3
                  className={`font-bold uppercase text-2xl xl:text-3xl mb-4 text-center ${chewy.className}`}
                >
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
        </div>
      </footer>
    </>
  );
}
