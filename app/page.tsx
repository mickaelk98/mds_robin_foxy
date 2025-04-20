import Image from "next/image";
export default function Home() {
  return (
    <>
      <header className="py-5 flex items-center justify-between w-full max-w-7xl mx-auto px-2 lg:px-0">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <nav>
          <ul className="flex items-center justify-between gap-6 text-xl">
            <li className="cursor-pointer">Accueil</li>
            <li className="cursor-pointer">Forum</li>
            <li className="cursor-pointer">Guides</li>
            <li className="cursor-pointer">Profile</li>
          </ul>
        </nav>
      </header>
      <main className="w-full max-w-7xl mx-auto px-2 lg:px-0 mt-20">
        <section className="flex flex-col gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl lg:text-5xl mb-5">
              Proteger vos enfants sur internet commence ici
            </h1>
            <p className="">
              un livre essentiel pour sensibiliser les enfants et des guide pour
              aider les parents et enseigants face aux danger du numérique{" "}
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
      </main>
      <footer></footer>
    </>
  );
}
