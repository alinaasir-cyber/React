import { useState, useEffect } from 'react';

function GreetingForm() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');


    useEffect(() => {
        if (name === '' && greeting === '') {
            document.title = 'Welcome';
        } else {
            document.title = `${greeting} ${name}`.trim();
        }
    }, [name, greeting]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Enter Your Name:</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={{ padding: '8px', fontSize: '16px', marginBottom: '20px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
            />

            <h2>Choose a Greeting:</h2>
            <input 
                type="text" 
                value={greeting} 
                onChange={(e) => setGreeting(e.target.value)} 
                style={{ padding: '8px', fontSize: '16px', marginBottom: '20px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
            />

            <div style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
                {name === '' && greeting === '' ? (
                    <p>Welcome</p>
                ) : (
                    <p>{greeting} {name}</p>
                )}
            </div>
        </div>
    );
}

export default GreetingForm;