"use client";

import { useRef } from "react";
import CarouselArrows from "../../components/ui/CarouselArrows";
import type { Categoria, Comercio } from "../../data/mock-data";
import SectionHeader from "../ui/SectionHeader";

type CategoriasProps = {
  categorias: Categoria[];
  comercios: Comercio[];
};

export default function Categorias({ categorias, comercios }: CategoriasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative z-20 mx-auto max-w-7.5xl px-12 -mt-42 pb-2">
      {/* <SectionHeader
        id="categorias"
        eyebrow="Explora por categoría"
        title=" Categorías populares"
        description="Conoce las categorías más populares" /> */}

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
                className="group snap-start shrink-0 w-50 min-h-[330px] bg-surface border border-border rounded-md p-6 flex flex-col items-center text-center gap-4 hover:shadow-md hover:border-secondary/40 transition-all"
              >
                <span className="flex h-29 w-29 items-center justify-center rounded-full text-6xl group-hover:scale-105 transition-transform">
                  {categoria.icono}
                </span>
                <span className="font-semibold text-sm text-text leading-snug">
                  {categoria.nombre}
                </span>
                <span className="text-xs text-text-muted">
                  {total} {total === 1 ? "comercio" : "comercios"}
                </span>
                <span className="font-light text-md text-muted leading-snug">
                  {categoria.descripcion}
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
