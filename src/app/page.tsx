
import Hero from "@/src/components/home/Hero";
import ComerciosDestacados from "@/src/components/home/ComerciosDestacados";
import Categorias from "@/src/components/home/Categorias";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ComerciosDestacados />
        <Categorias />
      </main>
    </>
  );
}
