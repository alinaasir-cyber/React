import { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Count: {count}</h2>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                    onClick={handleDecrement} 
                    disabled={count === 0} 
                    
                    style={{ 
                        padding: '6px 14px', 
                        cursor: count === 0 ? 'not-allowed' : 'pointer',
                        opacity: count === 0 ? 0.6 : 1 
                    }}
                >
                    Decrement
                </button>
                <button 
                    onClick={handleIncrement} 
                    style={{ padding: '6px 14px', cursor: 'pointer' }}
                >
                    Increment
                </button>
            </div>
        </div>
    );
}

export default CounterApp;