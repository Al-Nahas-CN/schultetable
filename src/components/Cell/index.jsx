import React, { useEffect } from "react";
import { useState } from "react";

export const Cell = React.memo(
  ({ value, onCellClick, disabled, restart, current }) => {
    const [activeCell, setActiveCell] = useState(false);

    const handleClick = () => {
      onCellClick(value);
      if (!activeCell && value === current) {
        setActiveCell(true);
      }
    };

    useEffect(() => {
      if (restart) setActiveCell(false);
    }, [restart]);

    return (
      <div
        onClick={handleClick}
        className={`cell-custom ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${activeCell ? "selected" : ""}`}
      >
        {value}
      </div>
    );
  },
);
