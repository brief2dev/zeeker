import PromoBanner from "../components/home/PromoBanner";
import Categorias from "../components/home/Categorias";
import OfertasTrending from "../components/home/OfertasTrending";
import ComerciosDestacados from "../components/home/ComerciosDestacados";
import {
  getBanners,
  getCategorias,
  getComercios,
  getComerciosDestacados,
  getOfertas,
} from "../services/comercios";

export default function Home() {
  const banners = getBanners();
  const categorias = getCategorias();
  const ofertas = getOfertas();
  const comercios = getComercios();
  const comerciosDestacados = getComerciosDestacados();

  
  return (
    <>
      <PromoBanner banners={banners} />
      <Categorias categorias={categorias} />
      <OfertasTrending ofertas={ofertas} comercios={comercios} />
      <ComerciosDestacados comercios={comerciosDestacados} />
    </>
  );
}
