import React, { useState, useEffect } from 'react';

export const TrafficLight = () => {
    const [color, setColor] = useState("");

    let colors = ['red', 'yellow', 'green'];
    
 
    return (
        <div className='container-fluid d-flex'>
            <div className="traffic-light">
                <div
                    onClick={() => setColor('red')}
                    className={'light red' + (color === 'red' ? ' glow-red' : '')}>
                </div>
                <div
                    onClick={() => setColor('yellow')}
                    className={'light yellow' + (color === 'yellow' ? ' glow-yellow' : '')}>
                </div>
                <div
                    onClick={() => setColor('green')}
                    className={'light green' + (color === 'green' ? ' glow-green' : '')}>
                </div>
            </div>
        </div>
    )
}