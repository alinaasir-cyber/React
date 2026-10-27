import { useState, useEffect } from 'react';

function GithubUserSearch() {
    const [username, setUsername] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchTerm) return;

        const fetchUser = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.github.com/users/${searchTerm}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        setSearchTerm(username);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>GitHub User Search</h2>

            <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter GitHub username"
                    style={{ padding: '6px', marginRight: '8px', width: '200px' }}
                />
                <button type="submit" style={{ padding: '6px 12px' }}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {user && (
                <div>
                    <h3>{user.name || user.login}</h3>
                    <img 
                        src={user.avatar_url} 
                        alt={user.login} 
                        style={{ width: '120px', borderRadius: '50%', marginBottom: '10px' }} 
                    />
                    <p>Location: {user.location || 'N/A'}</p>
                    <p>Public Repos: {user.public_repos}</p>
                </div>
            )}
        </div>
    );
}

export default GithubUserSearch;