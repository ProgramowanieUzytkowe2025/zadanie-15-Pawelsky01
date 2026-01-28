import { useState, useRef } from "react";
import TSPVisualization from "./components/TSPVisualization.js";
import TSPSolution from "./components/TSPSolutions.js";
import TSPControls from "./components/TSPControls";
import TSPChart from "./components/TSPChart.js";
import { randomOrder, pathLength } from "./utils/tspUtils";
import { loadTSPFile } from "./utils/fileLoader";

function App() {
  const [points, setPoints] = useState([]);
  const [order, setOrder] = useState([]);
  const [bestLength, setBestLength] = useState(null);
  const [history, setHistory] = useState([]);
  const fileInputRef = useRef(null);
  const handleFile = async (file) => {
    const pts = await loadTSPFile(file);
    const initOrder = randomOrder(pts.length);
    setPoints(pts);
    setOrder(initOrder);
    setBestLength(pathLength(pts, initOrder));
    setHistory([]);
  };

  return (
    <div className="app">
      <h1>TSP – Problem Komiwojażera</h1>

      <div className="file-input">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <button onClick={() => fileInputRef.current.click()}>
          Wybierz plik (.txt)
        </button>
      </div>

      <TSPVisualization points={points} order={order} />

      <TSPSolution order={order} length={bestLength} />

      <TSPControls
        points={points}
        order={order}
        setOrder={setOrder}
        setBestLength={setBestLength}
        history={history}
        setHistory={setHistory}
      />

      <TSPChart history={history} />
    </div>
  );
}

export default App;
