import Image from "next/image";
import robin from "@/app/assets/robin.png";
import leftArrow from "@/app/assets/left-arrow.png";
import rightArrow from "@/app/assets/right-arrow.png";

export function Testinonials() {
  return (
    <section className="bg-[var(--green-200)] py-30 lg:pt-40 pb-25 z-0 -mt-50">
      <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
        <h2 className="text-3xl xl:text-5xl font-extrabold text-center uppercase">
          ce que vous pensez de nous
        </h2>
        <div className="flex items-center justify-between mt-20">
          <Image src={leftArrow} alt="left-arrow" />
          <div className="md:flex items-center ">
            <Image
              src={robin}
              alt="robin"
              className="max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] mx-auto md:mx-0"
            />
            <div className="bg-white p-4 rounded-[60px] border-2 border-black md:translate-x-[-50px] lg:translate-x-[-100px] xl:translate-x-[-120px] max-w-[600px]">
              <p className="font-bold mb-4 mx-2">
                Un super livre pour parler d’Internet avec les enfants !
                L’histoire est à la fois amusante et éducative, parfaite pour
                sensibiliser mes enfants aux bons réflexes en ligne. Merci Foxy
                pour ce bel outil, clair et adapté à leur âge !
              </p>
              <span className="mx-2">— Sophie L., maman de deux enfants</span>
            </div>
          </div>
          <Image src={rightArrow} alt="right-arrow" />
        </div>
      </div>
    </section>
  );
}
