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
        </div>
        {/* </div> */}

        <CarouselArrows scrollRef={scrollRef} step={340} />
      </div>
    </section>
  );
}
