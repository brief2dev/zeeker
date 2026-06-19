import Link from "next/link";
import SectionHeader from "../../components/ui/SectionHeader";
import type { Comercio, Oferta } from "../../data/mock-data";

type OfertasTrendingProps = {
  ofertas: Oferta[];
  comercios: Comercio[];
};

export default function OfertasTrending({ ofertas, comercios }: OfertasTrendingProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 bg-primary-light/30 rounded-2xl">
      <SectionHeader
        id="ofertas"
        eyebrow="No te lo pierdas"
        title="🔥 Ofertas y tendencias"
        description="Las promociones más populares de esta semana"
      />

      <div className="flex gap-4 overflow-x-auto scrollbar-hidden pb-1">
        {ofertas.map((oferta) => {
          const comercio = comercios.find((c) => c.slug === oferta.comercioSlug);

          return (
            <Link
              key={oferta.id}
              href={comercio ? `/comercio/${comercio.slug}` : "#"}
              className="group shrink-0 w-56 bg-surface border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={oferta.imagen}
                  alt={oferta.titulo}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-danger text-white text-[11px] font-bold px-2 py-1 rounded-md">
                  -{oferta.descuento}%
                </span>
              </div>
              <div className="p-3">
                <p className="text-xs text-secondary font-semibold">
                  {comercio?.nombre ?? "Comercio"}
                </p>
                <h3 className="text-sm font-semibold text-text leading-snug line-clamp-1 mt-0.5">
                  {oferta.titulo}
                </h3>
                <p className="text-[11px] text-text-muted mt-1">
                  Vigente hasta {new Date(oferta.vigenciaHasta).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
