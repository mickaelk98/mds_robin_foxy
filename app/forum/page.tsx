import { Header } from "@/app/components/header";
import { Footer } from "../components/footer";
import { forumsService } from "../services/forums";
import { ForumCard } from "../components/forum-card";
import Image from "next/image";
import people from "@/app/assets/forum-people.png";
import { ChatBox } from "@/app/components/chat-box"



export default async function Forum() {
    const forum = await forumsService.getAllForums();

    return (
        <div className="flex flex-col bg-[var(--orange-200)] md:bg-[var(--background)]">

            <Header />
            <div className="flex flex-col items-center jusify-center">
                <Image className="hidden xl:block" src={people} alt="Foxy logo" width={400} height={300} />
            </div>
            <h1 className="bg-white text-2xl lg:text-4xl xl:text-5xl font-bold uppercase p-2 rounded-[20px] border-2 border-black inline-block text-wrap mt-10 mb-20 self-end rotate-12 mr-2">Forum de discussions</h1>
            <div className="bg-[var(--blue-100)] rounded-[100px] p-2 flex flex-col gap-10 w-[90%] max-w-[1000px] mx-auto py-20">
                {forum?.map((forum, i) => (
                    <ForumCard key={forum.$id} forumId={forum.$id} title={forum.title} description={forum.description} image={forum.image} i={i} />
                ))}
            </div>
            <ChatBox />
            <Footer />
        </div>
    );
}