import Image from "next/image";
import robin from "@/app/assets/robin.png";
import foxy from "@/app/assets/foxy.png";

export function WhyWe() {
  return (
    <div className="bg-[var(--green-200)] pt-10 lg:pt-40 pb-25 z-0 translate-y-[-60px] lg:translate-y-[-100px] mb-30 lg:mb-20">
      <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
        <h2 className="text-3xl xl:text-5xl font-extrabold text-center uppercase">
          Pourquoi choisir Foxy et Robin ?
        </h2>
        <div className="flex items-start justify-between mt-20">
          <div className="relative flex flex-col items-center">
            <Image src={robin} alt="robin" />
            <p
              className="text-center w-[140px] h-[90px] lg:w-[140px] lg:h-[90px] flex items-center justify-center border-2 border-white rounded-[50%] text-[var(--blue-200)] font-bold translate-y-[-15px] lg:translate-y-[-35px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(191, 220, 128, 1) 45%, rgba(244, 152, 28, 1) 100%)",
              }}
            >
              Qui sont Robin et Foxy ?
            </p>
            <p className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] uppercase font-bold bg-white px-2 py-1 lg:px-4 lg:py-2 rounded-2xl">
              robin
            </p>
          </div>
          {/* debut bulle de discussion */}
          <div className="absolute bottom-14 left-1/2 translate-x-[-50%] flex items-center md:flex-col md:items-center md:justify-center md:static md:inset-auto md:translate-x-0 md:translate-y-[50%]">
            <p className="w-[180px] h-[100px] md:w-[240px] md:h-[150px] flex items-center text-center justify-center border-2 bg-white rounded-[50%] text-[var(--blue-200)] font-bold p-1">
              Moi je t’accompagne pour rester en sécurité en ligne.
            </p>
            <p className="w-[180px] h-[100px] md:w-[240px] md:h-[150px] flex items-center text-center justify-center border-2 bg-white rounded-[50%] text-[var(--blue-200)] font-bold p-1">
              Et moi je t’aide à comprendre les dangers d’Internet
            </p>
          </div>
          {/* fin bulle de discussion */}
          <div className="relative flex flex-col items-center">
            <Image src={foxy} alt="foxy" />
            <p className="absolute top-[50%] right-0 lg:right-[20%] translate-x-[-50%] translate-y-[-50%] uppercase font-bold bg-white px-2 py-1 lg:px-4 lg:py-2 rounded-2xl">
              foxy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
