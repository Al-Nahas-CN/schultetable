import { useState, useEffect } from 'react'
import './App.css'
import { shuffleArray } from './utils/shuffle'
import { Grid } from './components/Grid'

function App() {
  const [grid, setGrid] = useState(() => {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    return shuffleArray(numbers);
  });
  const [current, setCurrent] = useState(1);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState(0);

  const restartGame = () => {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    setGrid(shuffleArray(numbers));
    setStarted(false);
    setFinished(false);
    setCurrent(1);
    setTime(0);
  }

  // Stop the timer when the user has reached 26 (after clicking 25)
  useEffect(() => {
    if (current > 25 && started) {
      setFinished(true);
      setStarted(false);
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

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Schulte Table</h1>

      <div className="w-[500px] mx-auto">
        <div className="flex justify-between mb-3">
          <h5 className='text-md font-regular'>{finished ? 'Game Over' : `Next: ${current}`}</h5>
          <h5 className='text-md font-regular'>Time: {(time / 1000).toFixed(2)}</h5>
        </div>
        <div className=' p-5 bg-gray-200/5 rounded-lg'>
          <Grid data={grid} current={current} setCurrent={setCurrent} started={started} setStarted={setStarted} />
        </div>
      </div>

      {finished && (
        <div className='flex justify-center mt-5'>
          <button onClick={restartGame} className='bg-gray-900 text-white px-5 py-2 rounded-lg cursor-pointer border'>Restart</button>
        </div>
      )}
    </>
  )
}

export default App
