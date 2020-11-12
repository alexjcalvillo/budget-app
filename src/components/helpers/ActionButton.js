import React from 'react';

const ActionButton = ({ text, width, color }) => {
    return (
        <button 
            className={`btn btn-${color} w-${width} ml-1`}
        >
            {text}
        </button>
    );
};

export default ActionButton;