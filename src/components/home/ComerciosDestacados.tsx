"use client";
import { COMERCIOS_DESTACADOS } from "../../data/mock-data";
import ComercioCard from "./ComercioCard";

export default function ComerciosDestacados() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-dot" aria-hidden="true" />
            Destacados
          </div>
          <div className="header-right">
            <div className="header-text">
              <h2 className="section-title">Comercios que te van a gustar</h2>
              <p className="section-sub">
                Seleccionados por la comunidad, verificados por nuestro equipo.
              </p>
            </div>
            <button className="ver-todos-btn" aria-label="Ver todos los comercios">
              Ver todos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid">
          {COMERCIOS_DESTACADOS.map((comercio) => (
            <ComercioCard key={comercio.id} comercio={comercio} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 1.5rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 2.5rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6ee7b7;
          margin-bottom: 1rem;
        }

        .label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6ee7b7;
          flex-shrink: 0;
        }

        .header-right {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .header-text {
          flex: 1;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #f5f5f5;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }

        .section-sub {
          font-size: 0.9rem;
          color: #71717a;
          margin: 0;
          line-height: 1.6;
        }

        .ver-todos-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 0.6rem 1.1rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #a1a1aa;
          cursor: pointer;
          white-space: nowrap;
          transition: border-color 0.15s, color 0.15s;
          flex-shrink: 0;
        }

        .ver-todos-btn:hover {
          border-color: rgba(110, 231, 183, 0.3);
          color: #6ee7b7;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 3rem 1rem;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .header-right {
            flex-direction: column;
            align-items: flex-start;
          }
          .ver-todos-btn {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
