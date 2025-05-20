import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Welcom } from "@/app/components/welcom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcom />
      </main>
      <Footer />
    </>
  );
}
