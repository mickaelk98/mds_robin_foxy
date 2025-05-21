import Image from "next/image";
import leftArrow from "@/app/assets/left-arrow.png";
import rightArrow from "@/app/assets/right-arrow.png";
import fileIcon from "@/app/assets/file.png";
import booksIcon from "@/app/assets/books.png";
import messageIcon from "@/app/assets/message.png";
import { Chewy } from "next/font/google";

const chewy = Chewy({
  subsets: ["latin"],
  weight: ["400"],
});

export function Category() {
  const categories = [
    {
      id: 0,
      icon: fileIcon,
      title: "fiches",
      text: [
        "Profitez de nos fiches pédagogiques en ligne dans le cadre de vos cours ou de vos activités éducatives.",
        "Explorez les différentes catégories à disposition pour trouver facilement LA fiche parfaite qui conviendra le mieux au sujet que vous désirez évoquer avec votre enfant",
      ],
    },
    {
      id: 1,
      icon: messageIcon,
      title: "conseils",
      text: [
        "Soyez conseillé, ou à votre tour, divulguez également vos meilleurs conseils pour permettre à d’autres parents/professionnels à adapter au mieux leurs méthodes d’apprentissage",
        "Dans cette section, retrouvez les témoignages et conseils qui vous aideront dans vos démarches.",
      ],
    },
    {
      id: 2,
      icon: booksIcon,
      title: "Kits",
      text: [
        "Explorez les différents kits de cours et sujets mis à disposition pour éduquer vos enfants de la façon la plus organisée possible !",
      ],
    },
  ];

  return (
    <>
      <section className="bg-[var(--orange-500)] w-full translate-y-[-200px] pb-20 pt-60 -mt-26 z-10">
        <div className="w-full max-w-7xl mx-auto px-2 lg:px-0">
          <h2
            className={`${chewy.className} absolute top-[50px] mt-60 right-[10px] lg:right-[50px] text-3xl xl:text-5xl rotate-12 font-extrabold bg-white rounded-[60px] p-2 border-2 border-black w-fit`}
          >
            Catégories
          </h2>
          <div className="flex flex-row items-center justify-between xl:gap-4 mt-20">
            <Image src={leftArrow} alt="left-arrow" width={30} height={30} />
            <ul className="mt-20 flex flex-col items-center gap-20 lg:flex-row">
              {categories.map((category, index) => (
                <li key={index} className="relative">
                  <article className="flex flex-col min-h-[405px] items-center border-8 border-[var(--pink-200)] rounded-[60px] p-2 w-fit max-w-[350px] bg-white">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={100}
                      height={100}
                      className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                    <h3
                      className={`${chewy.className} text-2xl font-bold mt-10 mb-5 uppercase`}
                    >
                      {category.title}
                    </h3>
                    {category.text.map((text, index) => (
                      <p key={index} className="px-2 mb-5">
                        {text}
                      </p>
                    ))}
                  </article>
                </li>
              ))}
            </ul>
            <Image src={rightArrow} alt="left-arrow" width={30} height={300} />
          </div>
        </div>
      </section>
    </>
  );
}
