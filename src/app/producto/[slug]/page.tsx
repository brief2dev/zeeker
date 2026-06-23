import Link from "next/link";
import { notFound } from "next/navigation";
import { getComercioBySlug, getOfertaBySlug, getOfertas } from "@/services/comercios";
import { calcularPrecioFinal, formatearPrecio, formatearPrecioEntero } from "@/lib/precio";

type ProductoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getOfertas().map((oferta) => ({ slug: oferta.slug }));
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { slug } = await params;
  const oferta = getOfertaBySlug(slug);

  if (!oferta) {
    notFound();
  }

  const comercio = getComercioBySlug(oferta.comercioSlug);
  const precioFinal = calcularPrecioFinal(oferta.precioOriginal, oferta.descuento);
  const gratis = precioFinal <= 0;
  const { enteros, centavos } = formatearPrecio(precioFinal);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/" className="text-sm text-secondary font-semibold hover:text-secondary-dark">
        ← Volver al inicio
      </Link>

      <div className="mt-4 rounded-2xl overflow-hidden border border-border bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={oferta.imagen}
          alt={oferta.titulo}
          className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover"
        />
      </div>

      <div className="mt-6">
        {comercio && (
          <Link
            href={`/comercio/${comercio.slug}`}
            className="text-sm text-secondary font-semibold hover:text-secondary-dark"
          >
            {comercio.nombre}
          </Link>
        )}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mt-1">{oferta.titulo}</h1>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {!gratis && oferta.descuento > 0 && (
            <span className="text-text-muted line-through text-base">
              ${formatearPrecioEntero(oferta.precioOriginal)}
            </span>
          )}

          {gratis ? (
            <span className="text-3xl font-extrabold text-text">Gratis</span>
          ) : (
            <span className="text-3xl font-extrabold text-text">
              ${enteros}
              <sup className="text-base font-bold">{centavos}</sup>
            </span>
          )}

          {oferta.descuento > 0 && (
            <span className="bg-success text-white text-sm font-bold px-2 py-1 rounded-md leading-none">
              {oferta.descuento}% OFF
            </span>
          )}
        </div>

        {oferta.cuotas && (
          <p className="text-success font-medium mt-3">
            {oferta.cuotas.meses} meses sin intereses de $
            {oferta.cuotas.monto.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
          </p>
        )}

        {oferta.entregaDestacada ? (
          <span className="inline-block bg-success/10 text-success text-sm font-semibold px-3 py-1.5 rounded-md mt-3">
            {oferta.entrega}
          </span>
        ) : (
          <p className="text-success mt-3 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" />
            </svg>
            {oferta.entrega}
          </p>
        )}

        <p className="text-sm text-text-muted mt-4">
          Oferta vigente hasta{" "}
          {new Date(oferta.vigenciaHasta).toLocaleDateString("es-MX", {
            day: "numeric",
            month: "long",
          })}
        </p>

        {comercio && (
          <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
            <div className="h-14 w-14 rounded-lg overflow-hidden border border-border shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={comercio.imagen} alt={comercio.nombre} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-text-muted">Vendido y entregado por</p>
              <p className="font-semibold text-text">{comercio.nombre}</p>
            </div>
            <Link
              href={`/comercio/${comercio.slug}`}
              className="text-sm font-semibold text-secondary hover:text-secondary-dark whitespace-nowrap"
            >
              Ver comercio →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
