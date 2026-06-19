import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/home/Hero";
import ComerciosDestacados from "@/src/components/home/ComerciosDestacados";
import Categorias from "@/src/components/home/Categorias";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComerciosDestacados />
        <Categorias />
      </main>
    </>
  );
}
