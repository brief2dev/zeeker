"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="/" className="logo" aria-label="Zeekers inicio">
          <span className="logo-mark">Z</span>
          <span className="logo-text">zeekers</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#" className="nav-link">Explorar</a>
          <a href="#" className="nav-link">Comercios</a>
          <a href="#" className="nav-link">Ofertas</a>
          <a href="#" className="nav-link">Mapa</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-ghost">Iniciar sesión</button>
          <button className="btn-primary">Registrarse</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 1.5rem;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .navbar.scrolled {
          background: rgba(15, 15, 17, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-mark {
          width: 32px;
          height: 32px;
          background: #6ee7b7;
          color: #0a0a0f;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #f5f5f5;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #71717a;
          text-decoration: none;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }

        .nav-link:hover {
          color: #f5f5f5;
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .btn-ghost {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #a1a1aa;
          background: transparent;
          border: none;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
        }

        .btn-ghost:hover {
          color: #f5f5f5;
          background: rgba(255, 255, 255, 0.06);
        }

        .btn-primary {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #0a0a0f;
          background: #6ee7b7;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
        }

        .btn-primary:hover {
          background: #a7f3d0;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .btn-ghost {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
