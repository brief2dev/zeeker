"use client";

import { Comercio } from "../lib/mock-data";

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  Top: { bg: "rgba(245,158,11,0.15)", color: "#F59E0B" },
  Trending: { bg: "rgba(110,231,183,0.12)", color: "#6EE7B7" },
  Nuevo: { bg: "rgba(96,165,250,0.12)", color: "#60A5FA" },
  Oferta: { bg: "rgba(248,113,113,0.12)", color: "#F87171" },
};

interface Props {
  comercio: Comercio;
}

function StarRating({ value }: { value: number }) {
  return (
    <span className="stars" aria-label={`${value} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i <= Math.round(value) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </span>
  );
}

export default function ComercioCard({ comercio }: Props) {
  const badge = comercio.badge ? BADGE_STYLES[comercio.badge] : null;

  return (
    <article className="card">
      <div className="card-top">
        <div className="card-emoji">{comercio.imagen}</div>
        <div className="card-meta-top">
          {badge && comercio.badge && (
            <span
              className="card-badge"
              style={{ background: badge.bg, color: badge.color }}
            >
              {comercio.badge}
            </span>
          )}
          <span className={`card-status ${comercio.abierto ? "open" : "closed"}`}>
            {comercio.abierto ? "Abierto" : "Cerrado"}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-category">{comercio.categoria}</div>
        <h3 className="card-name">{comercio.nombre}</h3>
        <p className="card-desc">{comercio.descripcion}</p>

        <div className="card-rating">
          <StarRating value={comercio.rating} />
          <span className="rating-value">{comercio.rating}</span>
          <span className="rating-count">({comercio.reseñas})</span>
        </div>

        <div className="card-tags">
          {comercio.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <div className="card-info">
          <span className="card-price">{comercio.precio}</span>
          <span className="separator">·</span>
          <span className="card-distance">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {comercio.distancia}
          </span>
        </div>
        <button className="card-cta" aria-label={`Ver ${comercio.nombre}`}>
          Ver
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 231, 183, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(110, 231, 183, 0.08);
        }

        .card-top {
          padding: 1.25rem 1.25rem 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .card-emoji {
          font-size: 2.5rem;
          line-height: 1;
          user-select: none;
        }

        .card-meta-top {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.4rem;
        }

        .card-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: 100px;
        }

        .card-status {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.2rem 0.55rem;
          border-radius: 100px;
        }

        .card-status.open {
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
        }

        .card-status.closed {
          background: rgba(113, 113, 122, 0.1);
          color: #71717a;
        }

        .card-body {
          padding: 1rem 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .card-category {
          font-size: 0.72rem;
          font-weight: 600;
          color: #6ee7b7;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .card-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #f5f5f5;
          margin: 0;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.84rem;
          color: #71717a;
          line-height: 1.6;
          margin: 0.2rem 0 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-rating {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .stars {
          display: flex;
          gap: 1px;
          color: #f59e0b;
        }

        .rating-value {
          font-size: 0.85rem;
          font-weight: 700;
          color: #f5f5f5;
        }

        .rating-count {
          font-size: 0.78rem;
          color: #52525b;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.25rem;
        }

        .tag {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.05);
          color: #a1a1aa;
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .card-footer {
          padding: 0.85rem 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #71717a;
        }

        .separator {
          color: #3f3f46;
        }

        .card-price {
          font-weight: 700;
          color: #a1a1aa;
          letter-spacing: 0.05em;
        }

        .card-distance {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .card-cta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #6ee7b7;
          background: rgba(110, 231, 183, 0.08);
          border: 1px solid rgba(110, 231, 183, 0.15);
          border-radius: 8px;
          padding: 0.4rem 0.85rem;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }

        .card-cta:hover {
          background: rgba(110, 231, 183, 0.18);
        }
      `}</style>
    </article>
  );
}
