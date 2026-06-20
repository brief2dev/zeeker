import SectionHeader from "../../components/ui/SectionHeader";
import ComercioCard from "../../components/home/ComercioCard";
import type { Comercio } from "../../data/mock-data";

type ComerciosDestacadosProps = {
  comercios: Comercio[];
};

export default function ComerciosDestacados({ comercios }: ComerciosDestacadosProps) {
  return (
    <section className="mx-auto max-w-7.5xl px-12 py-10">
      <div className="rounded-xl bg-surface border border-border shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-8">
      <SectionHeader
        id="destacados"
        eyebrow="Comunidad local"
        title="Comercios destacados"
        description="Negocios recomendados por la comunidad en Ticul"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {comercios.map((comercio) => (
          <ComercioCard key={comercio.slug} comercio={comercio} />
        ))}
      </div>
      </div>
    </section>
  );
}
