import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Welcom } from "@/app/components/welcom";
import { WhyWe } from "@/app/components/why-we";
import { Methods } from "@/app/components/methods";
import { Category } from "@/app/components/category";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcom />
        <WhyWe />
        <Methods />
        <Category />
      </main>
      <Footer />
    </>
  );
}
