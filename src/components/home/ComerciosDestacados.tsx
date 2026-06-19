import SectionHeader from "../../components/ui/SectionHeader";
import ComercioCard from "../../components/home/ComercioCard";
import type { Comercio } from "../../data/mock-data";

type ComerciosDestacadosProps = {
  comercios: Comercio[];
};

export default function ComerciosDestacados({ comercios }: ComerciosDestacadosProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <SectionHeader
        id="destacados"
        eyebrow="Comunidad local"
        title="Comercios destacados"
        description="Negocios recomendados por la comunidad en Mérida"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {comercios.map((comercio) => (
          <ComercioCard key={comercio.slug} comercio={comercio} />
        ))}
      </div>
    </section>
  );
}
