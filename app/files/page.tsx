"use client"

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import { Chewy } from "next/font/google";
// import { useAuthStore } from "@/app/lib/stores/auth-store";
import { usersService } from "@/app/services/files"
import { useEffect, useState } from "react";
import type { Files } from "@/app/interfaces/files";

const chewy = Chewy({
    subsets: ["latin"],
    weight: ["400"],
});


export default function Files() {
    const [files, setFiles] = useState<Files[]>([]);


    useEffect(() => {

        usersService.getAllfiles().then(files => {
            setFiles(files);

        }).catch(error => {
            console.log(error);
        });
    }, []);
    // const { user } = useAuthStore();

    return (
        <>
            <Header />
            <div className="bg-[var(--orange-100)] py-20 flex flex-col items-center">
                <h1 className={`uppercase text-2xl lg:text-3xl xl:text-4xl mb-20 ${chewy.className}`}>fiches pédagogique</h1>

                <ul className="flex flex-col md:flex-row gap-10 w-full justify-center max-w-[1000px] mx-auto">
                    {files.map((file) => (
                        <li key={file.$id} className="p-3 rounded-xl flex flex-col items-center gap-1">
                            <span className='font-bold text-center mb-2 text-[var(--blue-200)]'>{file.title}</span>
                            <Image src={file.url} alt="foxy" width={200} height={200} />
                            {/* <a href={file.url} download target="_blank" className="text-center" rel="noopener noreferrer">
                                Télécharger
                            </a> */}
                            {/* <a href={file.url} target="_blank" className="text-center">Voir la fiche</a> */}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}