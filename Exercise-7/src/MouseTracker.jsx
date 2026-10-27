import { useState, useEffect } from 'react';

function MouseTracker() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>
            <p>Mouse X: <strong>{position.x}</strong></p>
            <p>Mouse Y: <strong>{position.y}</strong></p>
        </div>
    );
}

export default MouseTracker;