import { useCallback } from "react";
import { Cell } from "../Cell"

export const Grid = ({ data, current, setCurrent, started, setStarted }) => {
    // Derive if the grid is enabled directly from the current progress
    const enabled = current <= 25;

    const handleCellClick = useCallback((val) => {
        // If the game is already finished (grid disabled), ignore the click
        if (!enabled) return;

        if (!started) {
            setStarted(true);
        }

        setCurrent(prev => {
            if (enabled) {
                if (val === prev) {
                    return prev + 1;
                }
            }
            return prev;
        });
    }, [setCurrent, enabled]);

    return (
        <div className='grid grid-cols-5 gap-4'>
            {data.map((num, i) => (
                <Cell key={i} value={num} onCellClick={handleCellClick} disabled={!enabled} />
            ))}
        </div>
    )
}
