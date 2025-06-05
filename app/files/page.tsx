"use client"

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import certification from "@/app/assets/certification.png";
import exercice from "@/app/assets/exercice.png";
import regles from "@/app/assets/regles.png";
import test from "@/app/assets/test.png";
import { Chewy } from "next/font/google";
import type { Files } from "@/app/interfaces/files";
import { Button } from "@/app/components/ui/button"


const chewy = Chewy({
    subsets: ["latin"],
    weight: ["400"],
});

const files = [
    {
        title: "Certification",
        url: certification.src,
        target: "all"
    },
    {
        title: "Exercice",
        url: exercice.src,
        target: "all"
    },
    {
        title: "Règles",
        url: regles.src,
        target: "all"
    },
    {
        title: "Test",
        url: test.src,
        target: "all"
    }
]


export default function Files() {

    return (
        <>
            <Header />
            <div className="bg-[var(--orange-100)] py-20 flex flex-col items-center">
                <h1 className={`uppercase text-2xl lg:text-3xl xl:text-4xl mb-20 ${chewy.className}`}>fiches pédagogique</h1>

                <ul className="flex flex-col md:flex-row gap-10 w-full justify-center max-w-[1000px] mx-auto">
                    {files.map((file, i) => (
                        <li key={i} className="p-3 rounded-xl flex flex-col items-center gap-1">
                            <span className={`font-bold text-center text-2xl mb-2 text-[var(--blue-200)] ${chewy.className}`}>{file.title}</span>
                            <Image src={file.url} alt="foxy" width={200} height={200} className="mb-2" />
                            <Button>
                                <a href={file.url} download target="_blank" className="text-center" rel="noopener noreferrer">
                                    Télécharger
                                </a>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}