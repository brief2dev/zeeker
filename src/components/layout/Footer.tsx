import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text text-white mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 sm:col-span-1">
          <p className="font-extrabold text-lg mb-2">
            <span className="text-accent">Zeekers</span>
          </p>
          <p className="text-white/60">
            Conectando el comercio local de Ticul con más clientes cada día.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">Explorar</p>
          <ul className="space-y-1.5 text-white/70">
            <li><Link href="#destacados" className="hover:text-accent">Comercios destacados</Link></li>
            <li><Link href="#ofertas" className="hover:text-accent">Ofertas y tendencias</Link></li>
            <li><Link href="#" className="hover:text-accent">Categorías</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Para negocios</p>
          <ul className="space-y-1.5 text-white/70">
            <li><Link href="#" className="hover:text-accent">Publica tu comercio</Link></li>
            <li><Link href="#" className="hover:text-accent">Planes y precios</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Ayuda</p>
          <ul className="space-y-1.5 text-white/70">
            <li><Link href="#" className="hover:text-accent">Centro de ayuda</Link></li>
            <li><Link href="#" className="hover:text-accent">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Zeekers — Ticul, Yucatán
      </div>
    </footer>
  );
}
