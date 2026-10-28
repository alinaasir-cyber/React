import { useState } from 'react';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            setIsLoggedIn(true);
        }
    };

    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px' }}>
            <h2>Login Form</h2>

            
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Enter username"
                            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter password"
                            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                            required
                        />
                    </div>

                    <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
                        Login
                    </button>
                </form>
            ) : (
                
                <div>
                    <h3>Welcome, {username}!</h3>
                    <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default LoginForm;