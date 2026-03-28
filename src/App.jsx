import { useState, useEffect, use } from "react";
import "./App.css";
import { shuffleArray } from "./utils/shuffle";
import { Grid } from "./components/Grid";

function App() {
  const [gridSize, setGridSize] = useState(3);
  const [difficulty, setDifficulty] = useState(false);
  const [grid, setGrid] = useState(() => {
    const numbers = Array.from(
      { length: gridSize * gridSize },
      (_, i) => i + 1,
    );
    return shuffleArray(numbers);
  });
  const [current, setCurrent] = useState(1);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [restart, setRestart] = useState(true);

  const restartGame = () => {
    const numbers = Array.from(
      { length: gridSize * gridSize },
      (_, i) => i + 1,
    );
    setGrid(shuffleArray(numbers));
    setStarted(false);
    setFinished(false);
    setRestart(true);
    setCurrent(1);
    setTime(0);
  };

  useEffect(() => {
    if (started) setRestart(false);
  }, [started]);

  useEffect(() => {
    restartGame();
  }, [gridSize]);

  // Stop the timer when the user has reached 26 (after clicking 25)
  useEffect(() => {
    if (current > gridSize * gridSize && started) {
      setFinished(true);
      setStarted(false);
      setRestart(false);
    }
  }, [current, started]);

  // Use request interval with Date.now() for precise timer in milliseconds
  useEffect(() => {
    let interval;

    if (started) {
      const startTime = Date.now();
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // Update every 10ms for smooth decimal changes
    }

    return () => clearInterval(interval);
  }, [started]);

  const handleGridSizeChange = (val) => {
    setGridSize(val);
    restartGame();
    setRestart(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Schulte Table</h1>

      <div
        className="w-full px-5 grid gap-10"
        style={{ gridTemplateColumns: "repeat(3, auto)" }}
      >
        <div className="col-span-1 sm:col-span-1">
          <div className="flex flex-col items-center mb-6">
            <h5 className="text-md font-regular mb-4">Grid Size:</h5>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`button-custom ${gridSize === 3 ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => handleGridSizeChange(3)}
              >
                3x3
              </button>
              <button
                className={`button-custom ${gridSize === 4 ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => handleGridSizeChange(4)}
              >
                4x4
              </button>
              <button
                className={`button-custom ${gridSize === 5 ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => handleGridSizeChange(5)}
              >
                5x5
              </button>
              <button
                className={`button-custom ${gridSize === 7 ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => handleGridSizeChange(7)}
              >
                7x7
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-md font-regular mb-4">Difficulty:</h5>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`button-custom ${!difficulty ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => setDifficulty(false)}
              >
                Easy
              </button>
              <button
                className={`button-custom ${difficulty ? "active bg-white! text-gray-800!" : ""}`}
                onClick={(e) => setDifficulty(true)}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
        <div className={`game-base ${difficulty ? "hard" : "easy"}`}>
          <div className="flex justify-between mb-3">
            <h5 className="text-md font-regular">
              {finished ? "Game Over" : `Next: ${current}`}
            </h5>
            <h5 className="text-md font-regular">
              Time: {(time / 1000).toFixed(2)}
            </h5>
          </div>
          <div className=" p-3 sm:p-5 bg-gray-200/5 rounded-lg">
            <Grid
              data={grid}
              current={current}
              setCurrent={setCurrent}
              started={started}
              setStarted={setStarted}
              gridSize={gridSize}
              restart={restart}
            />
          </div>
        </div>
      </div>

      {(started || finished) && (
        <div className="flex justify-center mt-5">
          <button
            onClick={restartGame}
            className="bg-gray-900 text-white px-5 py-2 rounded-lg cursor-pointer border"
          >
            Restart
          </button>
        </div>
      )}
    </>
  );
}

export default App;
