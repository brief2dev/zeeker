export interface Comercio {
  id: string;
  slug?: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  rating: number;
  reseñas: number;
  precio: string; // "$" | "$$" | "$$$"
  imagen: string;
  badge?: "Nuevo" | "Trending" | "Top" | "Oferta";
  tags: string[];
  abierto: boolean;
  distancia: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  emoji: string;
  color: string;
  cantidad: number;
  descripcion: string;
}

export const COMERCIOS_DESTACADOS: Comercio[] = [
  {
    id: "1",
    slug: "taquería_el_jaguar",
    nombre: "Taquería El Jaguar",
    categoria: "Comida",
    descripcion: "Tacos de cochinita pibil y panuchos auténticos del centro de Mérida, receta familiar de tres generaciones.",
    rating: 4.9,
    reseñas: 342,
    precio: "$",
    imagen: "🌮",
    badge: "Top",
    tags: ["Yucateco", "Sin gluten", "Para llevar"],
    abierto: true,
    distancia: "0.3 km",
  },
  {
    id: "2",
    slug: "vintage_y_co",
    nombre: "Vintage & Co.",
    categoria: "Moda",
    descripcion: "Ropa vintage seleccionada a mano, accesorios únicos y piezas de época de los 70s y 80s.",
    rating: 4.7,
    reseñas: 189,
    precio: "$$",
    imagen: "👗",
    badge: "Trending",
    tags: ["Vintage", "Sustentable", "Segunda mano"],
    abierto: true,
    distancia: "1.1 km",
  },
  {
    id: "3",
    slug: "café_cenote",
    nombre: "Café Cenote",
    categoria: "Café",
    descripcion: "Especialidad en café de origen mexicano, ambiente relajado con vista al jardín interior.",
    rating: 4.8,
    reseñas: 521,
    precio: "$$",
    imagen: "☕",
    badge: "Trending",
    tags: ["Specialty coffee", "Wifi", "Vegetariano"],
    abierto: true,
    distancia: "0.8 km",
  },
  {
    id: "4",
    slug: "librería_papel_tinta",
    nombre: "Librería Papel & Tinta",
    categoria: "Cultura",
    descripcion: "Libros nuevos y de segunda mano, zines independientes y eventos literarios cada semana.",
    rating: 4.6,
    reseñas: 97,
    precio: "$",
    imagen: "📚",
    badge: "Nuevo",
    tags: ["Independiente", "Eventos", "Usado"],
    abierto: false,
    distancia: "2.0 km",
  },
  {
    id: "5",
    slug: "studio_kaan",
    nombre: "Studio Kaan",
    categoria: "Bienestar",
    descripcion: "Yoga, meditación y terapias holísticas. Clases matutinas y vespertinas con instructores certificados.",
    rating: 4.9,
    reseñas: 214,
    precio: "$$",
    imagen: "🧘",
    badge: "Top",
    tags: ["Yoga", "Meditación", "Online"],
    abierto: true,
    distancia: "1.5 km",
  },
  {
    id: "6",
    slug: "ferretería_don_pepe",
    nombre: "Ferretería Don Pepe",
    categoria: "Hogar",
    descripcion: "Todo para tu hogar y taller. Herramientas, materiales de construcción y asesoría personalizada.",
    rating: 4.5,
    reseñas: 430,
    precio: "$",
    imagen: "🔧",
    badge: "Oferta",
    tags: ["Herramientas", "Construcción", "Expertos"],
    abierto: true,
    distancia: "0.6 km",
  },
];

export const CATEGORIAS: Categoria[] = [
  {
    id: "comida",
    nombre: "Comida & Bebida",
    emoji: "🍽️",
    color: "#F59E0B",
    cantidad: 248,
    descripcion: "Restaurantes, cafés, antojitos",
  },
  {
    id: "moda",
    nombre: "Moda & Estilo",
    emoji: "👔",
    color: "#EC4899",
    cantidad: 134,
    descripcion: "Ropa, zapatos, accesorios",
  },
  {
    id: "tecnologia",
    nombre: "Tecnología",
    emoji: "💻",
    color: "#6EE7B7",
    cantidad: 89,
    descripcion: "Gadgets, reparaciones, software",
  },
  {
    id: "bienestar",
    nombre: "Bienestar",
    emoji: "🌿",
    color: "#34D399",
    cantidad: 102,
    descripcion: "Spa, gym, salud mental",
  },
  {
    id: "hogar",
    nombre: "Hogar & Deco",
    emoji: "🏠",
    color: "#A78BFA",
    cantidad: 176,
    descripcion: "Muebles, decoración, hogar",
  },
  {
    id: "cultura",
    nombre: "Arte & Cultura",
    emoji: "🎨",
    color: "#F87171",
    cantidad: 63,
    descripcion: "Galerías, libros, música",
  },
  {
    id: "servicios",
    nombre: "Servicios",
    emoji: "⚙️",
    color: "#60A5FA",
    cantidad: 211,
    descripcion: "Profesionales, talleres, consultoría",
  },
  {
    id: "mascotas",
    nombre: "Mascotas",
    emoji: "🐾",
    color: "#FBBF24",
    cantidad: 47,
    descripcion: "Veterinarias, grooming, accesorios",
  },
];
