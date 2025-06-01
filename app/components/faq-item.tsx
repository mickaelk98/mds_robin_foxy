import Image from "next/image";
import faqVague from "@/app/assets/faq-vague.png";

export function FAQItem({ title, content, number }: { title: string, content: string, number: number }) {
    return <div className="p-6 flex gap-10 items-stretch">
        <div className="flex flex-col gap-2 justify-start h-full">
            <span className="text-3xl font-bold text-[var(--orange-500)]">{number}</span>
            <div className="flex-1 flex">
                <Image
                    src={faqVague}
                    alt="Vague"
                    className="w-auto object-contain h-fit"
                />
            </div>
        </div>
        <div>
            <h2 className="mb-4 font-bold text-lg p-2 rounded-[10px] bg-[var(--blue-100)] text-bold">
                {title}
            </h2>
            <p className="text-base text-gray-700">
                {content}
            </p>
        </div>
    </div>
}
