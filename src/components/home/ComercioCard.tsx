import Link from "next/link";
import type { Comercio } from "../../data/mock-data";

type ComercioCardProps = {
  comercio: Comercio;
};

export default function ComercioCard({ comercio }: ComercioCardProps) {
  return (
    <Link
      href={`/comercio/${comercio.slug}`}
      className="group block bg-surface border border-border rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={comercio.imagen}
          alt={comercio.nombre}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {comercio.destacado && (
          <span className="absolute top-2 left-2 bg-primary text-white text-[11px] font-semibold px-2 py-1 rounded-md">
            Destacado
          </span>
        )}
      </div>

      <div className="p-3.5">
        <h3 className="font-semibold text-text leading-snug line-clamp-1">
          {comercio.nombre}
        </h3>
        <p className="text-xs text-text-muted line-clamp-2 mt-0.5">
          {comercio.descripcion}
        </p>

        <div className="flex items-center justify-between mt-2.5">
          <span className="flex items-center gap-1 text-xs font-semibold text-text">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent-dark">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {comercio.rating.toFixed(1)}
          </span>
          <span className="text-xs text-text-muted">{comercio.ubicacion}</span>
        </div>
      </div>
    </Link>
  );
}
