"use client";

import { useEffect, useState, type RefObject } from "react";

type CarouselArrowsProps = {
  scrollRef: RefObject<HTMLDivElement | null>;
  step?: number;
};

export default function CarouselArrows({ scrollRef, step = 320 }: CarouselArrowsProps) {
  const [puedeIzquierda, setPuedeIzquierda] = useState(false);
  const [puedeDerecha, setPuedeDerecha] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function actualizar() {
      const current = scrollRef.current;
      if (!current) return;
      setPuedeIzquierda(current.scrollLeft > 4);
      setPuedeDerecha(current.scrollLeft + current.clientWidth < current.scrollWidth - 4);
    }

    actualizar();
    el.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => {
      el.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
    };
  }, [scrollRef]);

  function mover(direccion: 1 | -1) {
    scrollRef.current?.scrollBy({ left: step * direccion, behavior: "smooth" });
  }

  return (
    <>
      {puedeIzquierda && (
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => mover(-1)}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-22 w-22 items-center justify-center rounded-full bg-surface border border-border shadow-md text-text hover:bg-background transition-colors"
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}
      {puedeDerecha && (
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => mover(1)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-22 w-22 items-center justify-center rounded-full bg-surface border border-border shadow-md text-text hover:bg-background transition-colors"
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
}
