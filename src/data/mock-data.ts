export type Categoria = {
  descripcion: string;
  slug: string;
  nombre: string;
  icono: string;

};

export type Comercio = {
  slug: string;
  nombre: string;
  categoriaSlug: string;
  descripcion: string;
  imagen: string;
  rating: number;
  ubicacion: string;
  destacado: boolean;
};

export type Oferta = {
  id: string;
  comercioSlug: string;
  titulo: string;
  precioOriginal: number;
  descuento: number;
  cuotas?: { meses: number; monto: number };
  entrega: string;
  entregaDestacada?: boolean;
  imagen: string;
  vigenciaHasta: string;
};

export type Banner = {
  id: string;
  titulo: string;
  subtitulo: string;
  cta: string;
  href: string;
  imagen: string;
};


export type BannerPublicidadComercio = {
  id: string;
  nombre: string;
  slug: string;
  categoria: string;
  imagen: string;
  banerComercio: string;
  titulo: string;
};

export type productoDestacado = {
  id: string;
  categoria: string;
  empresa: string;
  imagen: string;
  titulo: string;
  precio: number;
  descuentoPorcentaje: number;

};

export const categorias: Categoria[] = [
  { slug: "restaurantes", nombre: "Restaurantes", icono: "🍽️", descripcion: "Restaurantes con comida tradicional y moderna" },
  { slug: "cafeterias", nombre: "Cafeterías", icono: "☕", descripcion: "Cafeterías con café de especialidad y postres" },
  { slug: "panaderias", nombre: "Panaderías", icono: "🥖", descripcion: "Panaderías con panes artesanales y repostería" },
  { slug: "ropa", nombre: "Ropa", icono: "👕", descripcion: "Tiendas de ropa con diseños únicos" },
  { slug: "farmacias", nombre: "Farmacias", icono: "💊", descripcion: "Farmacias con servicios médicos y productos de salud" },
  { slug: "ferreterias", nombre: "Ferreterías", icono: "🔧", descripcion: "Ferreterías con herramientas y materiales para construcción" },
  { slug: "artesanias", nombre: "Artesanías", icono: "🧶", descripcion: "Artesanías con diseños únicos y materiales de calidad" },
  { slug: "tecnologia", nombre: "Tecnología", icono: "💻", descripcion: "Tiendas de tecnología con los últimos productos" },
];

export const comercios: Comercio[] = [
  {
    slug: "la-socorrito",
    nombre: "La Socorrito",
    categoriaSlug: "restaurantes",
    descripcion: "Cocina yucateca tradicional con más de 30 años de historia en el centro de Mérida.",
    imagen: "https://picsum.photos/seed/la-socorrito/640/420",
    rating: 4.8,
    ubicacion: "Centro, Mérida",
    destacado: true,
  },
  {
    slug: "panificadora-montejo",
    nombre: "Panificadora Montejo",
    categoriaSlug: "panaderias",
    descripcion: "Pan dulce recién horneado todas las mañanas. Famosos por sus marquesitas.",
    imagen: "https://picsum.photos/seed/panificadora-montejo/640/420",
    rating: 4.6,
    ubicacion: "García Ginerés, Mérida",
    destacado: true,
  },
  {
    slug: "cafe-cenote",
    nombre: "Café Cenote",
    categoriaSlug: "cafeterias",
    descripcion: "Café de especialidad de la región y repostería artesanal en un patio fresco.",
    imagen: "https://picsum.photos/seed/cafe-cenote/640/420",
    rating: 4.7,
    ubicacion: "Itzimná, Mérida",
    destacado: true,
  },
  {
    slug: "telar-maya",
    nombre: "Telar Maya",
    categoriaSlug: "artesanias",
    descripcion: "Bordados y hamacas hechas a mano por artesanas de la región.",
    imagen: "https://picsum.photos/seed/telar-maya/640/420",
    rating: 4.9,
    ubicacion: "Santiago, Mérida",
    destacado: true,
  },
  {
    slug: "farmacia-del-paseo",
    nombre: "Farmacia del Paseo",
    categoriaSlug: "farmacias",
    descripcion: "Farmacia de barrio con servicio a domicilio y consulta médica de bajo costo.",
    imagen: "https://picsum.photos/seed/farmacia-del-paseo/640/420",
    rating: 4.4,
    ubicacion: "Paseo de Montejo, Mérida",
    destacado: true,
  },
  {
    slug: "ferreteria-yum-kin",
    nombre: "Ferretería Yum Kin",
    categoriaSlug: "ferreterias",
    descripcion: "Todo para construcción y hogar, con asesoría personalizada desde 1985.",
    imagen: "https://picsum.photos/seed/ferreteria-yum-kin/640/420",
    rating: 4.3,
    ubicacion: "Col. México, Mérida",
    destacado: true,
  },
  {
    slug: "boutique-xtabay",
    nombre: "Boutique Xtabay",
    categoriaSlug: "ropa",
    descripcion: "Ropa y accesorios de diseñadores locales con inspiración yucateca.",
    imagen: "https://picsum.photos/seed/boutique-xtabay/640/420",
    rating: 4.5,
    ubicacion: "Centro, Mérida",
    destacado: true,
  },
  {
    slug: "tech-yuc",
    nombre: "TechYuc",
    categoriaSlug: "tecnologia",
    descripcion: "Reparación de celulares y laptops, venta de accesorios y soporte técnico.",
    imagen: "https://picsum.photos/seed/tech-yuc/640/420",
    rating: 4.2,
    ubicacion: "Altabrisa, Mérida",
    destacado: true,
  },
];

export const ofertas: Oferta[] = [
  {
    id: "of-1",
    comercioSlug: "la-socorrito",
    titulo: "Comida del día 2x1",
    precioOriginal: 180,
    descuento: 50,
    entrega: "Recoge en el restaurante",
    imagen: "https://picsum.photos/seed/oferta-socorrito/480/320",
    vigenciaHasta: "2026-06-30",
  },
  {
    id: "of-2",
    comercioSlug: "panificadora-montejo",
    titulo: "Docena de marquesitas",
    precioOriginal: 150,
    descuento: 20,
    entrega: "Recoge en tienda hoy",
    imagen: "https://picsum.photos/seed/oferta-montejo/480/320",
    vigenciaHasta: "2026-06-25",
  },
  {
    id: "of-3",
    comercioSlug: "cafe-cenote",
    titulo: "Café de especialidad + postre del día",
    precioOriginal: 120,
    descuento: 15,
    entrega: "Disponible para llevar",
    imagen: "https://picsum.photos/seed/oferta-cenote/480/320",
    vigenciaHasta: "2026-06-28",
  },
  {
    id: "of-4",
    comercioSlug: "boutique-xtabay",
    titulo: "Temporada de rebajas en ropa de diseñador local",
    precioOriginal: 899,
    descuento: 30,
    cuotas: { meses: 3, monto: 209.77 },
    entrega: "Envío gratis",
    entregaDestacada: true,
    imagen: "https://picsum.photos/seed/oferta-xtabay/480/320",
    vigenciaHasta: "2026-07-05",
  },
  {
    id: "of-5",
    comercioSlug: "tech-yuc",
    titulo: "Revisión y diagnóstico de tu equipo",
    precioOriginal: 250,
    descuento: 100,
    entrega: "Servicio en sucursal",
    imagen: "https://picsum.photos/seed/oferta-techyuc/480/320",
    vigenciaHasta: "2026-06-22",
  },
  {
    id: "of-6",
    comercioSlug: "ferreteria-yum-kin",
    titulo: "Descuento en herramientas seleccionadas",
    precioOriginal: 250,
    descuento: 100,
    entrega: "Servicio en sucursal",
    imagen: "https://picsum.photos/seed/oferta-techyuc/480/320",
    vigenciaHasta: "2026-06-22",
  },
  {
    id: "of-7",
    comercioSlug: "framacia-del-paseo",
    titulo: "Consulta médica general",
    precioOriginal: 250,
    descuento: 100,
    entrega: "Servicio en sucursal",
    imagen: "https://picsum.photos/seed/oferta-techyuc/480/320",
    vigenciaHasta: "2026-06-22",
  },
  {
    id: "of-8",
    comercioSlug: "cafeteria-del-paseo",
    titulo: "Café de especialidad + postre del día",
    precioOriginal: 250,
    descuento: 100,
    entrega: "Servicio envio a domicilio",
    imagen: "https://picsum.photos/seed/oferta-techyuc/480/320",
    vigenciaHasta: "2026-06-22",
  },
];

export const banners: Banner[] = [
  {
    id: "banner-1",
    titulo: "Apoya el comercio local",
    subtitulo: "Descubre negocios cerca de ti en Mérida",
    cta: "Explorar comercios",
    href: "#destacados",
    imagen: "https://picsum.photos/seed/banner-comercio-local/1200/420",
  },
  {
    id: "banner-2",
    titulo: "Hasta 50% de descuento",
    subtitulo: "Ofertas de la semana en restaurantes y cafeterías",
    cta: "Ver ofertas",
    href: "#ofertas",
    imagen: "https://picsum.photos/seed/banner-ofertas/1200/420",
  },
  {
    id: "banner-3",
    titulo: "¿Tienes un negocio?",
    subtitulo: "Publícalo gratis y llega a más clientes",
    cta: "Publica tu comercio",
    href: "#",
    imagen: "https://picsum.photos/seed/banner-publica/1200/420",
  },
];

export const publicidad: BannerPublicidadComercio[] = [
  {
    id: "banner-1",
    nombre: "Apoya el comercio local",
    slug: "Descubre-negocios",
    categoria: "zapato",
    imagen: "https://picsum.photos/seed/banner-comercio-local/1200/420",
    banerComercio: "https://picsum.photos/seed/banner-comercio-local/640/420",
    titulo: "Apoya el comercio local",
  },
  {
    id: "banner-2",
    nombre: "Hasta 50% de descuento",
    slug: "Ofertas-semana",
    categoria: "artesania",
    imagen: "https://picsum.photos/seed/banner-ofertas/1200/420",
    banerComercio: "https://picsum.photos/seed/banner-ofertas/640/420",
    titulo: "Hasta 50% de descuento",
  },
  {
    id: "banner-3",
    nombre: "¿Tienes un negocio?",
    slug: "Publícalo-gratis",
    categoria: "comida",
    imagen: "https://picsum.photos/seed/banner-publica/1200/420",
    banerComercio: "https://picsum.photos/seed/banner-publica/640/420",
    titulo: "¿Tienes un negocio?",
  },
];