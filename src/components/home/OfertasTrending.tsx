"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import type { Comercio, Oferta } from "../../data/mock-data";

type OfertasTrendingProps = {
  ofertas: Oferta[];
  comercios: Comercio[];
};

const NUM_PUNTOS = 3;

export default function OfertasTrending({ ofertas, comercios }: OfertasTrendingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [puntoActivo, setPuntoActivo] = useState(0);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const ratio = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setPuntoActivo(Math.round(ratio * (NUM_PUNTOS - 1)));
  }

  function irAPunto(indice: number) {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (maxScroll * indice) / (NUM_PUNTOS - 1), behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        id="ofertas"
        eyebrow="No te lo pierdas"
        title="🔥 Ofertas y tendencias"
        description="Las promociones más populares de esta semana"
        rightSlot={
          <div className="flex gap-1.5 pb-1">
            {Array.from({ length: NUM_PUNTOS }).map((_, indice) => (
              <button
                key={indice}
                type="button"
                aria-label={`Ir a la página ${indice + 1}`}
                onClick={() => irAPunto(indice)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  indice === puntoActivo ? "bg-secondary" : "bg-border"
                }`}
              />
            ))}
          </div>
        }
      />

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hidden pb-1 -mx-px"
      >
        {ofertas.map((oferta) => {
          const comercio = comercios.find((c) => c.slug === oferta.comercioSlug);
          const precioFinal = oferta.precioOriginal * (1 - oferta.descuento / 100);
          const gratis = precioFinal <= 0;
          const [enteros, centavos] = precioFinal.toFixed(2).split(".");

          return (
            <Link
              key={oferta.id}
              href={comercio ? `/comercio/${comercio.slug}` : "#"}
              className="group shrink-0 w-52 bg-surface rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={oferta.imagen}
                  alt={oferta.titulo}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3">
                <p className="text-[11px] text-secondary font-semibold">
                  {comercio?.nombre ?? "Comercio"}
                </p>
                <h3 className="text-sm text-text leading-snug line-clamp-2 mt-0.5 min-h-[2.5em]">
                  {oferta.titulo}
                </h3>

                {!gratis && oferta.descuento > 0 && (
                  <p className="text-xs text-text-muted line-through mt-2">
                    ${Math.round(oferta.precioOriginal).toLocaleString("es-MX")}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-0.5">
                  {gratis ? (
                    <span className="text-lg font-bold text-text">Gratis</span>
                  ) : (
                    <span className="text-lg font-bold text-text">
                      ${enteros}
                      <sup className="text-xs font-bold">{centavos}</sup>
                    </span>
                  )}
                  {oferta.descuento > 0 && (
                    <span className="bg-success text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm leading-none">
                      {oferta.descuento}% OFF
                    </span>
                  )}
                </div>

                {oferta.cuotas && (
                  <p className="text-xs text-success font-medium mt-1.5">
                    {oferta.cuotas.meses} meses sin intereses de $
                    {oferta.cuotas.monto.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
                  </p>
                )}

                {oferta.entregaDestacada ? (
                  <span className="inline-block bg-success/10 text-success text-xs font-semibold px-2 py-1 rounded-md mt-1.5">
                    {oferta.entrega}
                  </span>
                ) : (
                  <p className="text-xs text-success mt-1.5 flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" />
                    </svg>
                    {oferta.entrega}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
