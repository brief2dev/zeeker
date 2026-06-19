"use client";

import { useState } from "react";
import { CATEGORIAS } from "../../data/mock-data";

export default function Categorias() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-dot" aria-hidden="true" />
            Explorar
          </div>
          <h2 className="section-title">¿Qué estás buscando?</h2>
          <p className="section-sub">
            Navega por categoría y encuentra exactamente lo que necesitas.
          </p>
        </div>

        <div className="grid">
          {CATEGORIAS.map((cat) => {
            const isHovered = hovered === cat.id;
            return (
              <button
                key={cat.id}
                className="cat-card"
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                aria-label={`Explorar ${cat.nombre}`}
                style={{
                  "--cat-color": cat.color,
                  borderColor: isHovered
                    ? `${cat.color}40`
                    : "rgba(255,255,255,0.07)",
                  background: isHovered
                    ? `${cat.color}0d`
                    : "rgba(255,255,255,0.025)",
                } as React.CSSProperties}
              >
                <div
                  className="cat-icon-wrap"
                  style={{
                    background: isHovered
                      ? `${cat.color}20`
                      : "rgba(255,255,255,0.04)",
                    borderColor: isHovered
                      ? `${cat.color}35`
                      : "rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="cat-emoji" role="img" aria-hidden="true">
                    {cat.emoji}
                  </span>
                </div>

                <div className="cat-info">
                  <span
                    className="cat-name"
                    style={{ color: isHovered ? cat.color : "#e4e4e7" }}
                  >
                    {cat.nombre}
                  </span>
                  <span className="cat-desc">{cat.descripcion}</span>
                </div>

                <div className="cat-footer">
                  <span
                    className="cat-count"
                    style={{
                      color: isHovered ? cat.color : "#52525b",
                      background: isHovered
                        ? `${cat.color}15`
                        : "rgba(255,255,255,0.04)",
                    }}
                  >
                    {cat.cantidad} comercios
                  </span>
                  <svg
                    className="cat-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isHovered ? cat.color : "#3f3f46"}
                    strokeWidth="2.5"
                    style={{
                      transform: isHovered
                        ? "translateX(3px)"
                        : "translateX(0)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        <div className="cta-row">
          <div className="cta-text">
            <span>¿No encuentras lo que buscas?</span>
            <a href="#" className="cta-link">
              Sugerir una categoría
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 1.5rem 6rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 2.5rem;
          max-width: 520px;
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

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .cat-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          padding: 1.25rem;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .cat-card:hover {
          transform: translateY(-3px);
        }

        .cat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }

        .cat-emoji {
          font-size: 1.6rem;
          line-height: 1;
          user-select: none;
        }

        .cat-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
        }

        .cat-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          transition: color 0.2s;
          line-height: 1.3;
        }

        .cat-desc {
          font-size: 0.78rem;
          color: #52525b;
          line-height: 1.5;
        }

        .cat-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cat-count {
          font-size: 0.74rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 100px;
          transition: color 0.2s, background 0.2s;
        }

        .cat-arrow {
          flex-shrink: 0;
        }

        .cta-row {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
        }

        .cta-text {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #52525b;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #6ee7b7;
          text-decoration: none;
          font-weight: 600;
          transition: gap 0.15s;
        }

        .cta-link:hover {
          gap: 0.5rem;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 3rem 1rem 4rem;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
