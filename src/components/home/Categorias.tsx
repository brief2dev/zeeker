import type { Categoria } from "../../data/mock-data";

type CategoriasProps = {
  categorias: Categoria[];
};

export default function Categorias({ categorias }: CategoriasProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-lg font-bold text-text mb-3">Categorías</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hidden pb-1">
        {categorias.map((categoria) => (
          <a
            key={categoria.slug}
            href={`#destacados`}
            className="flex flex-col items-center justify-center gap-1.5 shrink-0 w-20 h-20 rounded-xl bg-surface border border-border hover:border-secondary hover:shadow-sm transition-all"
          >
            <span className="text-2xl">{categoria.icono}</span>
            <span className="text-[11px] font-medium text-text-muted text-center leading-tight px-1">
              {categoria.nombre}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
