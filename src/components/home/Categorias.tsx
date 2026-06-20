"use client";

import { useRef } from "react";
import CarouselArrows from "../../components/ui/CarouselArrows";
import type { Categoria, Comercio } from "../../data/mock-data";

type CategoriasProps = {
  categorias: Categoria[];
  comercios: Comercio[];
};

export default function Categorias({ categorias, comercios }: CategoriasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-20 mx-auto max-w-6xl px-4 -mt-42 pb-2">
      <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">Categorías</h2>

      <div className="relative">
        {/* <div className="rounded-3xl bg-surface border border-border shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6"></div> */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden pb-1"
        >
          {categorias.map((categoria) => {
            const total = comercios.filter((c) => c.categoriaSlug === categoria.slug).length;

            return (
              <a
                key={categoria.slug}
                href="#destacados"
                className="group snap-start shrink-0 w-60 min-h-[260px] bg-surface border border-border rounded-xl p-4 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-secondary/40 transition-all"
              >
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary-light text-4xl group-hover:scale-105 transition-transform">
                  {categoria.icono}
                </span>
                <span className="font-semibold text-sm text-text leading-snug">
                  {categoria.nombre}
                </span>
                <span className="text-xs text-text-muted">
                  {total} {total === 1 ? "comercio" : "comercios"}
                </span>
              </a>
            );
          })}
        </div>
        {/* </div> */}

        <CarouselArrows scrollRef={scrollRef} step={340} />
      </div>
    </section>
  );
}
