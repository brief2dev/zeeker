"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 py-9">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-3xl">🌿</span>
            <span className="font-extrabold text-xl tracking-tight"><span className="text-white">Zeekers</span>
            </span>
          </Link>

          {/* Buscador (estilo marketplace, centrado) */}
          <form
            className="hidden md:flex flex-1 mx-4"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex w-full rounded-lg overflow-hidden bg-white">
              <input
                type="search"
                placeholder="Busca comercios, productos u ofertas..."
                className="flex-1 px-4 py-2.5 text-sm text-text outline-none"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="px-4 text-text-muted hover:text-primary transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
            </div>
          </form>

          {/* Acciones desktop */}
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium shrink-0">
            <Link href="#destacados" className="hover:text-accent transition-colors">
              Comercios
            </Link>
            <Link href="#ofertas" className="hover:text-accent transition-colors">
              Ofertas
            </Link>
            <Link
              href="#"
              className="bg-accent text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Publica tu comercio
            </Link>
          </nav>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className="md:hidden ml-auto p-2"
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuAbierto ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Buscador + menú en móvil */}
        {menuAbierto && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Busca comercios, productos u ofertas..."
                className="w-full px-4 py-2 rounded-lg text-sm text-text outline-none"
              />
            </form>
            <Link href="#destacados" onClick={() => setMenuAbierto(false)} className="text-sm font-medium">
              Comercios
            </Link>
            <Link href="#ofertas" onClick={() => setMenuAbierto(false)} className="text-sm font-medium">
              Ofertas
            </Link>
            <Link
              href="#"
              onClick={() => setMenuAbierto(false)}
              className="bg-accent text-white font-semibold px-4 py-2 rounded-lg text-center"
            >Publica tu comercio
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
