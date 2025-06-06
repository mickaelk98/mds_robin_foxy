import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/components/ui/accordion";
import { FAQItem } from "@/app/components/faq-item";

import { Chewy } from "next/font/google";

const chewy = Chewy({ subsets: ["latin"], weight: ["400"] });

export default function FAQ() {

    const faqItems1 = [
        {
            id: 1,
            title: "À partir de quel âge le livre &quot;Robin et Foxy&quot; est-il recommandé ?",
            content: "Le livre est conçu pour les enfants de 6 à 10 ans, avec un langage simple et des situations adaptées à leur quotidien numérique. Grâce à l&apos;univers de notre marque, les enfants peuvent également s&apos;identifier facilement aux personnages Robin &amp; Foxy ainsi qu&apos;aux aventures ludiques qu&apos;ils vivent au fil des tomes.",
            number: 1
        },
        {
            id: 2,
            title: "Quels sujets liés à Internet le livre aborde-t-il concrètement ?",
            content: "Au fil des différents tomes, votre enfant suit les aventures de Robin et Foxy, deux protagonistes bienveillants. Robin, aidé par son fidèle compagnon, doit à chaque fois trouver la solution à un problème lié au monde du numérique. Les sujets évoqués sont donc divers et variés, allant de la compréhension des réseaux sociaux, au cyberharcèlement ou encore aux fakes news.",
            number: 2
        },
    ]


    const faqItems2 = [
        {
            id: 1,
            title: "Existe-t-il une version numérique ou interactive du livre ?",
            content: "Non, nous tenons à conserver le format papier pour nos histoires.",
            number: 3
        },
        {
            id: 2,
            title: "Comment le livre aide-t-il les enfants à réagir face aux dangers en ligne ?",
            content: "Chaque histoire met en scène une situation concrète à laquelle les enfants peuvent être confrontés sur Internet, comme la réception d’un message suspect ou la gestion de leur vie privée. Grâce aux conseils de Robin et Foxy, les jeunes lecteurs apprennent les bons réflexes à adopter, par exemple demander de l’aide à un adulte, ne jamais partager d’informations personnelles et reconnaître les comportements à risque. Des activités ludiques à la fin de chaque tome renforcent ces apprentissages de façon interactive.",
            number: 4
        }

    ]




    return (
        <>
            <Header />
            <main className="bg-[var(--green-200)] min-h-screen w-full">

                {/* Bloc principal FAQ */}
                <section className="w-full bg-[var(--orange-100)] py-10 px-2 md:px-0 flex flex-col items-center">
                    <h1 className={`text-4xl md:text-5xl xl:text-6xl font-bold mt-2 ${chewy.className} bg-white py-2 px-6 rounded-[50px] my-10 border-2 border-black`}>FAQ</h1>
                    <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
                        {/* Bloc 1-3-5 */}
                        <div className="flex flex-col gap-2">
                            {faqItems1.map((item) => (
                                <FAQItem key={item.id} {...item} />
                            ))}

                        </div>
                        {/* Bloc 2-4-6 */}
                        <div className="flex flex-col gap-8">
                            {faqItems2.map((item) => (
                                <FAQItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vos autres questions */}
                <section className="w-full flex flex-col items-center py-10 bg-[var(--orange-200)]">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${chewy.className}`}>Vos autres questions</h2>
                    <div className="w-full max-w-2xl">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Je n&apos;arrive pas à accéder à mon compte, que faire ?</AccordionTrigger>
                                <AccordionContent>Essayez de réinitialiser votre mot de passe ou contactez le support.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Peut-on accéder aux contenus sans être inscrit ?</AccordionTrigger>
                                <AccordionContent>Certains contenus sont accessibles librement, d&apos;autres nécessitent une inscription.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Comment recevoir la newsletter ?</AccordionTrigger>
                                <AccordionContent>Nous n&apos;en proposons pas pour le moment.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Est-ce possible de collaborer avec vous en tant qu&apos;enseignant(e) ?</AccordionTrigger>
                                <AccordionContent>Oui, contactez-nous pour en discuter !</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Le contenu est-il validé par des spécialistes ?</AccordionTrigger>
                                <AccordionContent>Oui, tous nos contenus sont relus par des experts du numérique et de l&apos;éducation.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Puis-je poser des questions sur le forum sans compte ?</AccordionTrigger>
                                <AccordionContent>Non, il faut un compte pour participer au forum.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="relative w-full flex justify-end mt-8 ">
                        <p className="bg-[var(--green-200)] border-2 border-white text-[var(--blue-200)] font-bold px-8 py-3 rounded-l-full text-lg shadow-md hover:bg-[var(--green-500)]">Vous n&apos;avez pas trouvé votre réponse ? Contactez-nous !</p>
                    </div>
                </section>

                {/* Bloc contacts */}
                <section className="w-full flex flex-col items-center py-10 bg-[var(--orange-200)]">
                    <h2 className={`text-3xl md:text-4xl font-bold my-8 bg-white py-2 px-6 rounded-[50px] border-2 border-black -rotate-12 self-end xl:self-center ${chewy.className}`}>Contacts</h2>
                    <div className="bg-[var(--green-200)] rounded-[15px] shadow-md p-8 flex flex-col gap-4 w-[90%] max-w-xl self-end">
                        <div className="flex flex-col gap-2  ">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-xl lg:text-3xl">Email:</span>
                                <span className="text-xl lg:text-2xl">foxyetrobin@gmail.com</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-xl lg:text-3xl">Adresse:</span>
                                <span className="text-xl lg:text-2xl">40 Rue du Chemin Vert, 75011 Paris</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
