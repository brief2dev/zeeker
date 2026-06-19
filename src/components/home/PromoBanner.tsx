"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Banner } from "@/data/mock-data";

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
    <section className="mx-auto max-w-6xl px-4 pt-4">
      <div className="relative overflow-hidden rounded-2xl bg-surface border border-border">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activo * 100}%)` }}
        >
          {banners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className="relative w-full shrink-0 aspect-[16/6] sm:aspect-[16/5]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={banner.imagen}
                alt={banner.titulo}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-text/80 via-text/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 px-6 sm:px-10">
                <h2 className="text-white text-xl sm:text-3xl font-extrabold max-w-md leading-tight">
                  {banner.titulo}
                </h2>
                <p className="text-white/85 text-sm sm:text-base max-w-sm">
                  {banner.subtitulo}
                </p>
                <span className="mt-2 inline-block bg-accent text-text text-sm font-semibold px-4 py-2 rounded-lg">
                  {banner.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Indicadores */}
        {banners.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
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
      </div>
    </section>
  );
}
