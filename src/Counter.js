import React from "react";

export default function Counter(props) {
    return (
        <div className="counter-container stats-container">
            <div className='counter__current stat'>
                <div className="stat-title">Attempts:</div>
                <div className="stat-value">{props.counter}</div>
            </div>
        </div>
    )
}