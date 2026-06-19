import Link from "next/link";
import { notFound } from "next/navigation";
import { getComercioBySlug, getComercios, getOfertasPorComercio } from "../../../services/comercios";

type ComercioPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getComercios().map((comercio) => ({ slug: comercio.slug }));
}

export default async function ComercioPage({ params }: ComercioPageProps) {
  const { slug } = await params;
  const comercio = getComercioBySlug(slug);


  const ofertas = getOfertasPorComercio(comercio.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/" className="text-sm text-secondary font-semibold hover:text-secondary-dark">
        ← Volver al inicio
      </Link>

      <div className="mt-4 rounded-2xl overflow-hidden border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={comercio.imagen}
          alt={comercio.nombre}
          className="w-full aspect-[16/7] object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text">{comercio.nombre}</h1>
          <p className="text-text-muted mt-1">{comercio.ubicacion}</p>
        </div>
        <span className="flex items-center gap-1 bg-primary-light/40 text-primary-dark font-semibold px-3 py-1.5 rounded-lg text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {comercio.rating.toFixed(1)}
        </span>
      </div>

      <p className="text-text mt-4 leading-relaxed">{comercio.descripcion}</p>

      {ofertas.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold text-text mb-3">Ofertas de este comercio</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ofertas.map((oferta) => (
              <div key={oferta.id} className="border border-border rounded-xl p-4 bg-surface">
                <span className="inline-block bg-danger text-white text-xs font-bold px-2 py-1 rounded-md">
                  -{oferta.descuento}%
                </span>
                <p className="font-semibold text-text mt-2">{oferta.titulo}</p>
                <p className="text-xs text-text-muted mt-1">
                  Vigente hasta {new Date(oferta.vigenciaHasta).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
