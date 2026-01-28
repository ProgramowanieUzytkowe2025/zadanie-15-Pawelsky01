import { useState } from "react";

export default function TSPVisualization({ points, order }) {
  const [showPath, setShowPath] = useState(false);

  if (!points.length) return null;

  const maxX = Math.max(...points.map(p => p.x));
  const maxY = Math.max(...points.map(p => p.y));

  return (
    <div className="card visualization">
  <h2>Wizualizacja problemu</h2>
  <button onClick={() => setShowPath(!showPath)} className="secondary">Pokaż rozwiązanie</button>

      <svg width={500} height={500}>
        {points.map((p, i) => (
          <circle
            key={i}
            cx={(p.x / maxX) * 480 + 10}
            cy={(p.y / maxY) * 480 + 10}
            r={4}
            fill="black"
          />
        ))}

        {showPath &&
          order.map((idx, i) => {
            const next = order[(i + 1) % order.length];
            return (
              <line
                key={i}
                x1={(points[idx].x / maxX) * 480 + 10}
                y1={(points[idx].y / maxY) * 480 + 10}
                x2={(points[next].x / maxX) * 480 + 10}
                y2={(points[next].y / maxY) * 480 + 10}
                stroke="red"
              />
            );
          })}
      </svg>
    </div>
  );
}
