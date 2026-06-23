export type Categoria = {
  slug: string;
  nombre: string;
  icono: string;
  descripcion: string;
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
  slug: string;
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
  comercioSlug: string;
  etiqueta: string;
  titulo: string;
  subtitulo: string;
  cta: string;
  variante: "primary" | "secondary";
  banerComercio: string;
  imagen: string;
};

export const categorias: Categoria[] = [
  { slug: "restaurantes", nombre: "Restaurantes", icono: "🍽️", descripcion: "Negocios que ofrecen servicios de comida y bebida" },
  { slug: "cafeterias", nombre: "Cafeterías", icono: "☕", descripcion: "Negocios que ofrecen servicios de café y bebidas calientes" },
  { slug: "panaderias", nombre: "Panaderías", icono: "🥖", descripcion: "Negocios que ofrecen servicios de panadería y repostería" },
  { slug: "ropa", nombre: "Ropa", icono: "👕", descripcion: "Negocios que ofrecen servicios de venta de ropa" },
  { slug: "farmacias", nombre: "Farmacias", icono: "💊", descripcion: "Negocios que ofrecen servicios de venta de medicamentos y productos de salud" },
  { slug: "ferreterias", nombre: "Ferreterías", icono: "🔧", descripcion: "Negocios que ofrecen servicios de venta de herramientas y materiales para la construcción" },
  { slug: "artesanias", nombre: "Artesanías", icono: "🧶", descripcion: "Negocios que ofrecen servicios de venta de artesanías y productos hechos a mano" },
  { slug: "tecnologia", nombre: "Tecnología", icono: "💻", descripcion: "Negocios que ofrecen servicios de venta y reparación de equipos tecnológicos" },
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
    destacado: false,
  },
  {
    slug: "ferreteria-yum-kin",
    nombre: "Ferretería Yum Kin",
    categoriaSlug: "ferreterias",
    descripcion: "Todo para construcción y hogar, con asesoría personalizada desde 1985.",
    imagen: "https://picsum.photos/seed/ferreteria-yum-kin/640/420",
    rating: 4.3,
    ubicacion: "Col. México, Mérida",
    destacado: false,
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
    destacado: false,
  },
];

export const ofertas: Oferta[] = [
  {
    id: "of-1",
    slug: "comida-del-dia-2x1-la-socorrito",
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
    slug: "docena-de-marquesitas",
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
    slug: "cafe-de-especialidad-mas-postre",
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
    slug: "temporada-de-rebajas-xtabay",
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
    slug: "revision-y-diagnostico-tech-yuc",
    comercioSlug: "tech-yuc",
    titulo: "Revisión y diagnóstico de tu equipo",
    precioOriginal: 250,
    descuento: 100,
    entrega: "Servicio en sucursal",
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
    id: "premium-1",
    comercioSlug: "la-socorrito",
    etiqueta: "Comercio Premium",
    titulo: "Sabor yucateco de toda la vida",
    subtitulo: "Reserva tu mesa y vive 30 años de tradición en un solo platillo",
    cta: "Ver comercio",
    variante: "primary",
    banerComercio: "https://picsum.photos/seed/logo-socorrito/120/120",
    imagen: "https://picsum.photos/seed/premium-socorrito/800/420",
  },
  {
    id: "premium-2",
    comercioSlug: "telar-maya",
    etiqueta: "Comercio Premium",
    titulo: "Artesanía maya hecha a mano",
    subtitulo: "Piezas únicas de bordado y hamacas tejidas por artesanas locales",
    cta: "Ver comercio",
    variante: "secondary",
    banerComercio: "https://picsum.photos/seed/logo-telarmaya/120/120",
    imagen: "https://picsum.photos/seed/premium-telarmaya/800/420",
  },
  {
    id: "premium-3",
    comercioSlug: "panificadora-montejo",
    etiqueta: "Comercio Premium",
    titulo: "Panadería artesanal con tradición",
    subtitulo: "Disfruta de nuestras marquesitas y pan dulce recién horneado todos los días",
    cta: "Ver comercio",
    variante: "secondary",
    banerComercio: "https://picsum.photos/seed/logo-telarmaya/120/120",
    imagen: "https://picsum.photos/seed/premium-telarmaya/800/420",
  },
  {
    id: "premium-4",
    comercioSlug: "cafe-cenote",
    etiqueta: "Comercio Premium",
    titulo: "Café de especialidad + postre del día",
    subtitulo: "Disfruta de nuestro café de especialidad y un postre del día en un ambiente relajado",
    cta: "Ver comercio",
    variante: "primary",
    banerComercio: "https://picsum.photos/seed/logo-telarmaya/120/120",
    imagen: "https://picsum.photos/seed/premium-telarmaya/800/420",
  },
];
