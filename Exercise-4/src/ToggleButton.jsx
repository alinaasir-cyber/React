import { useState } from 'react';

function ToggleButton() {
    
    const [isOn, setIsOn] = useState(true);

    
    const handleToggle = () => {
        setIsOn(!isOn); 

    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Toggle Button Challenge</h2>
            
            
            <button 
                onClick={handleToggle}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    backgroundColor: isOn ? '#4CAF50' : '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                {isOn ? 'ON' : 'OFF'}
            </button>

            
            <p style={{ marginTop: '15px', fontSize: '16px' }}>
                The button is currently: <strong>{isOn ? 'ON (True)' : 'OFF (False)'}</strong>
            </p>
        </div>
    );
}

export default ToggleButton;