"use client";

import { useEffect, useState } from "react";

const SEARCH_TERMS = [
    "tacos al pastor cerca de ti...",
    "café con wifi en el centro...",
    "yoga matutino los lunes...",
    "librería de segunda mano...",
    "mecánico de confianza...",
    "tienda de plantas en Mérida...",
];

export default function Hero() {
    const [termIndex, setTermIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [stats] = useState({ comercios: 1073, categorias: 8, ciudades: 3 });

    useEffect(() => {
        const term = SEARCH_TERMS[termIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayed.length < term.length) {
            timeout = setTimeout(() => {
                setDisplayed(term.slice(0, displayed.length + 1));
            }, 55);
        } else if (!isDeleting && displayed.length === term.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => {
                setDisplayed(displayed.slice(0, -1));
            }, 25);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setTermIndex((i) => (i + 1) % SEARCH_TERMS.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, termIndex]);

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-grid" aria-hidden="true" />
                <div className="hero-glow" aria-hidden="true" />
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot" />
                    <span>Más de {stats.comercios.toLocaleString()} comercios activos</span>
                </div>

                <h1 className="hero-title">
                    Descubre lo mejor
                    <br />
                    <span className="hero-accent">de tu ciudad</span>
                </h1>

                <p className="hero-subtitle">
                    Comercios locales verificados, reseñas reales y ofertas exclusivas — todo en un solo lugar.
                </p>

                <div className="search-box">
                    <div className="search-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                    </div>
                    <div className="search-input-area">
                        <span className="search-placeholder">
                            {displayed}
                            <span className="cursor" aria-hidden="true">|</span>
                        </span>
                    </div>
                    <button className="search-btn" aria-label="Buscar">
                        Buscar
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">{stats.comercios.toLocaleString()}+</span>
                        <span className="stat-label">Comercios</span>
                    </div>
                    <div className="stat-divider" aria-hidden="true" />
                    <div className="stat">
                        <span className="stat-number">{stats.categorias}</span>
                        <span className="stat-label">Categorías</span>
                    </div>
                    <div className="stat-divider" aria-hidden="true" />
                    <div className="stat">
                        <span className="stat-number">{stats.ciudades}</span>
                        <span className="stat-label">Ciudades</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 7rem 1.5rem 4rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(110, 231, 183, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110, 231, 183, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .hero-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(110, 231, 183, 0.08) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 720px;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(110, 231, 183, 0.08);
          border: 1px solid rgba(110, 231, 183, 0.2);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          font-size: 0.8rem;
          color: #6ee7b7;
          margin-bottom: 2rem;
          letter-spacing: 0.02em;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6ee7b7;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          color: #f5f5f5;
          margin: 0 0 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-accent {
          color: #6ee7b7;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #a1a1aa;
          margin: 0 0 2.5rem;
          line-height: 1.7;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 0.5rem 0.5rem 0.5rem 1.25rem;
          gap: 0.75rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          max-width: 580px;
          margin: 0 auto 2.5rem;
        }

        .search-box:focus-within {
          border-color: rgba(110, 231, 183, 0.4);
          box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.08);
        }

        .search-icon {
          color: #52525b;
          flex-shrink: 0;
          display: flex;
        }

        .search-input-area {
          flex: 1;
          min-height: 2.25rem;
          display: flex;
          align-items: center;
          text-align: left;
        }

        .search-placeholder {
          font-size: 0.95rem;
          color: #71717a;
          white-space: nowrap;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .cursor {
          display: inline-block;
          color: #6ee7b7;
          font-weight: 300;
          animation: blink 1s step-end infinite;
          margin-left: 1px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .search-btn {
          background: #6ee7b7;
          color: #0a0a0f;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.25rem;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.1s;
        }

        .search-btn:hover {
          background: #a7f3d0;
          transform: translateY(-1px);
        }

        .search-btn:active {
          transform: translateY(0);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #f5f5f5;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.78rem;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stat-divider {
          width: 1px;
          height: 2rem;
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 640px) {
          .hero {
            padding: 6rem 1rem 3rem;
            min-height: 85vh;
          }
          .hero-stats {
            gap: 1.25rem;
          }
          .search-btn {
            padding: 0.6rem 1rem;
          }
        }
      `}</style>
        </section>
    );
}
