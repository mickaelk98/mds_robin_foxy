import { Map } from "@/app/components/map";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import Image from "next/image";
import books from "@/app/assets/books.png"
import { Chewy } from "next/font/google";

const chewy = Chewy({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Shops() {


    return (
        <>
            <Header />
            <div className="bg-[var(--orange-100)] py-20 flex flex-col">
                <h1 className={`${chewy.className} uppercase font-bold text-xl lg:text-3xl xl:text-4xl inline-block self-end rotate-12 mr-4 bg-white px-2 py-4 border-2 border-black rounded-[30px]`}>map interactive</h1>
                <div className="flex items-center justify-start lg:ml-20">
                    <Image src={books} alt="magazines" width={100} height={100} className="translate-x-5" />
                    <p className="uppercase block lg:inline-block text-sm xl:text-xl self-start bg-white px-2 py-4 border-2 border-[var(--orange-200)] rounded-[30px]">OÙ POUVEZ-VOUS TROUVER
                        NOS MAGAZINES ?</p>
                </div>
                {/* <div className="bg-white w-[98%] md:w-[95%] lg:w-[90%] mx-auto border-[10px] md:border-[20px] lg:border-[30px] xl:border-[40px] border-orange-500 rounded-[50px]">
                    <Map />
                </div> */}
                <div className="
                                custom-gradient-border 
                                p-[10px] md:p-[20px] lg:p-[30px] xl:p-[40px]
                                rounded-[50px] 
                                w-[98%] md:w-[95%] lg:w-[90%] 
                                mx-auto
                                flex justify-center items-center
                                ">
                    <div className="bg-white rounded-[40px] w-full h-full flex justify-center items-center">
                        <Map />
                    </div>
                </div>

                <p className="uppercase inline-block max-w-[300px] self-end text-sm xl:text-xl text-center -rotate-12 mr-4 bg-white px-2 py-4 border-2 border-black rounded-[30px]">EXPLOREZ LA MAP POUR RETROUVER NOS BOUTIQUES PARTOUT DANS VOTRE VILLE !</p>
            </div>
            <Footer />
        </>
    );
}
