import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

export default function TSPChart({ history }) {
  if (!history.length) {
    return (
      <div className="card chart-container">
        <h2>Jakość rozwiązania</h2>
        <p>Brak danych – uruchom algorytm.</p>
      </div>
    );
  }

  return (
    <div className="card chart-container">
      <h2>Jakość rozwiązania</h2>

      <Line
        data={{
          labels: history.map((p) => p.x),
          datasets: [
            {
              label: "Długość trasy",
              data: history.map((p) => p.y),
              borderColor: "#2563eb",
              backgroundColor: "rgba(37, 99, 235, 0.2)",
              pointRadius: 3,
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { title: { display: true, text: "Iteracja" } },
            y: { title: { display: true, text: "Długość trasy" } },
          },
        }}
        height={300}
      />
    </div>
  );
}
