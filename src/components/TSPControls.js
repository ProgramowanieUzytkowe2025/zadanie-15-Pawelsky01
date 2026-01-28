import { useEffect, useRef, useState } from "react";
import { randomOrder, pathLength } from "../utils/tspUtils.js";

export default function TSPControls({
  points,
  order,
  setOrder,
  setBestLength,
  history,
  setHistory,
}) {
  const [running, setRunning] = useState(false);
  const [iterations, setIterations] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running || !points.length) return;

    intervalRef.current = setInterval(() => {
      const candidate = randomOrder(points.length);
      const len = pathLength(points, candidate);

      setIterations((i) => i + 1);
      setHistory((h) => [...h, { x: iterations + 1, y: len }]);

      setBestLength((prev) => {
        if (len < prev) {
          setOrder(candidate);
          return len;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <div className="card controls">
      <button onClick={() => setRunning(!running)}>
        {running ? "Przerwa" : "Szukaj rozwiązania"}
      </button>
      <span> Iteracje: {iterations}</span>
    </div>
  );
}
