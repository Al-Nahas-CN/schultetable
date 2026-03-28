import { useCallback } from "react";
import { Cell } from "../Cell";

export const Grid = ({
  data,
  current,
  setCurrent,
  started,
  setStarted,
  gridSize,
  restart,
}) => {
  // Derive if the grid is enabled directly from the current progress
  const enabled = current <= gridSize * gridSize;

  const handleCellClick = useCallback(
    (val) => {
      // If the game is already finished (grid disabled), ignore the click
      if (!enabled) return;

      if (!started) {
        setStarted(true);
      }

      setCurrent((prev) => {
        if (enabled) {
          if (val === prev) {
            return prev + 1;
          }
        }
        return prev;
      });
    },
    [setCurrent, enabled],
  );

  return (
    <div
      className="grid gap-2 sm:gap-4"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {data.map((num, i) => (
        <Cell
          key={i}
          value={num}
          onCellClick={handleCellClick}
          disabled={!enabled}
          restart={restart}
          current={current}
        />
      ))}
    </div>
  );
};
