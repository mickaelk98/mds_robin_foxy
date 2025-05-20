import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Welcom } from "@/app/components/welcom";
import { WhyWe } from "@/app/components/why-we";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcom />
        <WhyWe />
      </main>
      <Footer />
    </>
  );
}
