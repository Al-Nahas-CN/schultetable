import React from 'react';

export const Cell = React.memo(({ value, onCellClick, disabled }) => {

    const handleClick = () => {
        onCellClick(value);
    }

    return (
        <div onClick={handleClick} className={`bg-gray-500 hover:bg-white transition-colors text-white hover:text-gray-500 p-5 rounded-lg text-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>
            {value}
        </div>
    )
});
