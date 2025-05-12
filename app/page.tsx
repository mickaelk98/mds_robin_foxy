import Image from "next/image";
import { Header } from "@/app/components/header";
import { Faq } from "@/app/components/faq";
import { ContactForm } from "@/app/components/contat-form";
import { Footer } from "@/app/components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto px-2 lg:px-0 mt-20">
        <section className="flex flex-col gap-5 md:flex-row md:items-center mb-20">
          <div>
            <h1 className="text-4xl lg:text-6xl mb-5">
              Protéger vos enfants sur internet commence ici
            </h1>
            <p className="text-xl lg:text-2xl">
              Un livre essentiel pour sensibiliser les enfants et des guide pour
              aider les parents et enseigants face aux dangers du numérique{" "}
            </p>
          </div>
          <div className="w-full max-w-[350px]">
            <Image
              src="/book.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-4xl lg:text-6xl mb-20 mt-5">Notre mission</h2>
          <div>
            <ul className="flex flex-col items-center gap-5 md:flex-row">
              <li className="flex flex-col items-center gap-2 mb-5">
                <Image src="/enfant.png" alt="Logo" width={100} height={100} />
                <p className="font-bold">Pour les enfants</p>
                <p>
                  Foxy et Robin aident les enfants à comprendre Internet et à
                  s’y aventurer en toute sécurité. À travers des histoires et
                  des jeux, ils apprennent à reconnaître les dangers et à
                  adopter les bons réflexes.
                </p>
              </li>
              <li className="flex flex-col items-center gap-2 mb-5">
                <Image src="/parent.png" alt="Logo" width={100} height={100} />
                <p className="font-bold">Pour les parents</p>
                <p>
                  Nous guidons les parents dans l’accompagnement numérique de
                  leurs enfants grâce à des conseils simples et des guides
                  pratiques. Notre mission : créer un cadre rassurant à la
                  maison.
                </p>
              </li>
              <li className="flex flex-col items-center gap-2 mb-5">
                <Image src="/pro.png" alt="Logo" width={100} height={100} />
                <p className="font-bold">Pour les professionnels</p>
                Nous fournissons des ressources pédagogiques pour sensibiliser
                les enfants aux usages d’Internet. Nous aidons les
                professionnels à intégrer l’éducation numérique dans leurs
                pratiques.
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col items-center mb-20">
          <h2 className="text-4xl lg:text-6xl mb-8 mt-5">FAQ</h2>
          <p className="text-2xl lg:text-4xl mb-8">
            Les questions les plus souvent posées
          </p>

          <Faq />
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl mb-8 mt-5">Nous contacter</h2>

          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
