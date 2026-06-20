"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Banner } from "../../data/mock-data";

type PromoBannerProps = {
  banners: Banner[];
};

export default function PromoBanner({ banners }: PromoBannerProps) {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const intervalo = setInterval(() => {
      setActivo((actual) => (actual + 1) % banners.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [banners.length]);

  if (banners.length === 0) return null;

  function anterior() {
    setActivo((actual) => (actual - 1 + banners.length) % banners.length);
  }

  function siguiente() {
    setActivo((actual) => (actual + 1) % banners.length);
  }

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activo * 100}%)` }}
      >
        {banners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.href}
            className="relative w-full shrink-0 h-[460px] sm:h-[500px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner.imagen}
              alt={banner.titulo}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Difuminado lateral para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-text/85 via-text/35 to-transparent" />
            {/* Difuminado inferior: la imagen se desvanece hacia el fondo de la página */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-background" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
                <div className="flex flex-col items-start gap-2 max-w-md">
                  <h2 className="text-white text-2xl sm:text-4xl font-extrabold leading-tight">
                    {banner.titulo}
                  </h2>
                  <p className="text-white/85 text-sm sm:text-lg">
                    {banner.subtitulo}
                  </p>
                  <span className="mt-2 inline-block bg-accent text-text text-sm sm:text-base font-semibold px-4 py-2 rounded-lg">
                    {banner.cta}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Flechas de navegación */}
      {/* {banners.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Banner anterior"
            onClick={anterior}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 h-14 w-14 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-text shadow-md transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente banner"
            onClick={siguiente}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 h-14 w-14 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-text shadow-md transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )} */}

      {/* Indicadores */}
      {banners.length > 1 && (
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-2.5">
          {banners.map((banner, indice) => (
            <button
              key={banner.id}
              type="button"
              aria-label={`Ir al banner ${indice + 1}`}
              onClick={() => setActivo(indice)}
              className={`h-2.5 rounded-full transition-all ${
                indice === activo ? "w-6 bg-surface" : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}