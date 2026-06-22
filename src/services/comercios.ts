import {
  banners,
  categorias,
  comercios,
  ofertas,
  publicidad,
  type Banner,
  type BannerPublicidadComercio,
  type Categoria,
  type Comercio,
  type Oferta,
} from "../data/mock-data";

// Esta capa existe para que, el día de mañana, sustituyas el mock-data
// por llamadas reales (fetch/API) sin tener que tocar los componentes.\



export function getBannerPublicidad(): BannerPublicidadComercio[] {
  return publicidad;
}

export function getCategorias(): Categoria[] {
  return categorias;
}

export function getComercios(): Comercio[] {
  return comercios;
}

export function getComercioBySlug(slug: string): Comercio | undefined {
  return comercios.find((comercio) => comercio.slug === slug);
}

export function getComerciosDestacados(): Comercio[] {
  return comercios.filter((comercio) => comercio.destacado);
}

export function getComerciosPorCategoria(categoriaSlug: string): Comercio[] {
  return comercios.filter((comercio) => comercio.categoriaSlug === categoriaSlug);
}

export function getOfertas(): Oferta[] {
  return ofertas;
}

export function getOfertasPorComercio(comercioSlug: string): Oferta[] {
  return ofertas.filter((oferta) => oferta.comercioSlug === comercioSlug);
}

export function getBanners(): Banner[] {
  return banners;
}
