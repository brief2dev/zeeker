import Link from "next/link";
import type { BannerPublicidadComercio } from "../../data/mock-data";

type BannerPublicidadProps = {
    publicidad: BannerPublicidadComercio[];
};

const ESTILOS = {
    primary: { fondo: "bg-primary", overlay: "from-primary" },
    secondary: { fondo: "bg-secondary", overlay: "from-secondary" },
} as const;

export default function BannerPublicidad({ publicidad }: BannerPublicidadProps) {
    if (publicidad.length === 0) return null;

    return (
        <section className="mx-auto max-w-7.5xl px-12 py-6">
            <div className="grid sm:grid-cols-2 gap-4">
                {publicidad.map((anuncio) => {
                    const estilo = ESTILOS[anuncio.variante];

                    return (
                        <Link
                            key={anuncio.id}
                            href={`/comercio/${anuncio.comercioSlug}`}
                            className={`group relative flex h-40 sm:h-44 overflow-hidden rounded-xl ${estilo.fondo} hover:opacity-95 transition-opacity`}
                        >
                            {/* Contenido (etiqueta, logo, título, CTA) */}
                            <div className="relative z-10 flex w-[58%] sm:w-1/2 flex-col gap-2 px-5 py-4">
                                <div className="h-9 w-9 rounded-md overflow-hidden bg-white shrink-0">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={anuncio.banerComercio}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">
                                    {anuncio.etiqueta}
                                </span>
                                <h3 className="text-white font-extrabold text-base sm:text-lg leading-snug">
                                    {anuncio.titulo}
                                </h3>
                                <p className="text-white/80 text-xs sm:text-sm leading-snug line-clamp-2">
                                    {anuncio.subtitulo}
                                </p>
                                <span className="mt-auto text-white text-xs font-semibold group-hover:underline">
                                    {anuncio.cta} →
                                </span>
                            </div>

                            {/* Imagen de fondo a la derecha, difuminada hacia el color del card */}
                            <div className="relative flex-1">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={anuncio.imagen}
                                    alt={anuncio.titulo}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className={`absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r ${estilo.overlay} to-transparent`} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
