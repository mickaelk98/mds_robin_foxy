import Image from "next/image";
import logo from "@/app/assets/foxy-head.png";
import Link from "next/link";

export function ForumCard({ forumId, title, description, image, i }: { forumId: string, title: string, description: string, image: string, i: number }) {
    let bg;
    switch (i) {
        case 0:
            bg = "bg-[var(--green-200)]";
            break;
        case 1:
            bg = "bg-[var(--orange-200)]";
            break;
        case 2:
            bg = "bg-[var(--blue-200)]";
            break;
        case 3:
            bg = "bg-[var(--pink-100)]";
            break;
        default:
            break;
    }

    return (
        <Link href={`/forum/${forumId}`} className="block">
            <div className="relative flex flex-col items-center gap-1 mx-auto w-[90%] max-w-[600px] cursor-pointer">
                <p className="text-2xl font-bold w-[80%] ml-10 text-center">{title}</p>
                <div className="bg-[var(--background)] rounded-[60px] overflow-hidden">
                    <div className={`${bg} h-4`}></div>
                    <p className="p-2 w-[80%] mx-auto">{description}</p>
                    <div className={`${bg} h-4`}></div>
                </div>
                <ul className="uppercase flex gap-2 -mt-6">
                    <li className="bg-white px-2 py-1 rounded-[30px]">securité</li>
                    <li className="bg-white px-2 py-1 rounded-[30px]">conseils</li>
                    <li className="bg-white px-2 py-1 rounded-[30px]">discussions</li>
                </ul>
                <Image className="absolute top-6 lg:top-0 -left-2" src={logo} alt="Foxy logo" width={60} height={30} />
                <div className="absolute -bottom-1 -right-2 flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 rounded-full overflow-hidden bg-white">
                    <Image
                        className="object-cover w-full h-full rounded-full"
                        src={image}
                        alt="forum profil"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </Link>
    );
}