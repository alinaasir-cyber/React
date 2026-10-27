import { useState, useEffect } from 'react';

function CountdownTimer() {
    const [seconds, setSeconds] = useState(19);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

       
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }

        
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    const handleStart = () => setIsActive(true);


    const handleStop = () => setIsActive(false);

  
    const handleReset = () => {
        setIsActive(false);
        setSeconds(30);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Countdown Timer</h2>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Set Time (seconds): {' '}
                    <input 
                        type="number" 
                        value={seconds} 
                        onChange={(e) => setSeconds(Number(e.target.value))}
                        disabled={isActive}
                        style={{ padding: '5px', width: '60px' }}
                    />
                </label>
            </div>

            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Time Left: {seconds} seconds
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleStart} disabled={isActive} style={{ padding: '6px 12px' }}>
                    Start
                </button>
                <button onClick={handleStop} style={{ padding: '6px 12px' }}>
                    Stop
                </button>
                <button onClick={handleReset} style={{ padding: '6px 12px' }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CountdownTimer;