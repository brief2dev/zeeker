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

  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activo * 100}%)` }}
      >
        {banners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.href}
            className="relative w-full shrink-0 aspect-[16/7] sm:aspect-[16/4.5]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner.imagen}
              alt={banner.titulo}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-text/85 via-text/35 to-transparent" />
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

      {/* Indicadores */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {banners.map((banner, indice) => (
            <button
              key={banner.id}
              type="button"
              aria-label={`Ir al banner ${indice + 1}`}
              onClick={() => setActivo(indice)}
              className={`h-1.5 rounded-full transition-all ${
                indice === activo ? "w-6 bg-accent" : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
