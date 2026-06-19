import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComerciosDestacados from "./components/ComerciosDestacados";
import Categorias from "./components/Categorias";

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
