import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Welcom } from "@/app/components/welcom";
import { WhyWe } from "@/app/components/why-we";
import { Methods } from "@/app/components/methods";
import { Category } from "@/app/components/category";
import { Testinonials } from "@/app/components/testimonials";

export default function Home() {
  console.log("les variables d'environnement sont:", process.env.APPWRITE_ENDPOINT);
  return (
    <>
      <Header />
      <main>
        <Welcom />
        <WhyWe />
        <Methods />
        <Category />
        <Testinonials />
      </main>
      <Footer />
    </>
  );
}
