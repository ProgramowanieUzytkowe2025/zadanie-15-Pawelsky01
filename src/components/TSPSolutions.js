export default function TSPSolution({ order, length }) {
  if (!order.length) return null;

  return (
    <div className="card">
      <h2>Rozwiązanie</h2>

      <div className="solution-path">{order.map((i) => i + 1).join(" → ")}</div>

      <div className="solution-info">Długość: {length.toFixed(2)}</div>
    </div>
  );
}
