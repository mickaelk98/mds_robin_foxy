import Image from "next/image";
import Desk from "@/app/assets/desk.png";
import leftArrow from "@/app/assets/left-arrow.png";
import rightArrow from "@/app/assets/right-arrow.png";
import { SecondWave } from "@/app/components/wave/second-wave";
import { Chewy } from "next/font/google";

const chewy = Chewy({
  subsets: ["latin"],
  weight: ["400"],
});

export function Methods() {
  return (
    <>
      <section className="bg-[var(--blue-200)] w-full translate-y-[-350px] lg:translate-y-[-300px] py-20 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0 flex flex-col">
          <h2
            className={`text-3xl xl:text-5xl font-extrabold text-center uppercase ${chewy.className}`}
          >
            Nos méthodes
          </h2>
          <div className="w-full flex justify-center items-center mt-10">
            <Image className="lg:mr-10 w-10" src={leftArrow} alt="left-arrow" />
            <Image className="w-[80%]" src={Desk} alt="desk" />
            <Image
              className="lg:ml-10 w-10"
              src={rightArrow}
              alt="right-arrow"
            />
          </div>
          <p
            className={`${chewy.className} text-md lg:text-2xl xl:text-4xl font-bold text-center p-2 text-[var(--blue-200)] bg-white rounded-[60px] -translate-y-8 -rotate-8 max-w-[600px] lg:self-end lg:-translate-y-40`}
          >
            Découvrez les méthodes parfaites de Foxy pour apprendre à votre
            enfant à naviguer sur internet avec sécurité !
          </p>
        </div>
      </section>
      <SecondWave />
    </>
  );
}
