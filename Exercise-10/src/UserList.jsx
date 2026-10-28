function UserList({ users }) {
    return (
        <div style={{ padding: '20px', }}>
            <h2>Users List</h2>

            {users.length === 0 ? (
                <p>No users available.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map((user) => (
                        <li 
                            key={user.id} 
                            style={{ 
                                padding: '10px', 
                                marginBottom: '10px', 
                                border: '1px solid #ddd', 
                                borderRadius: '4px',
                                maxWidth: '300px' 
                            }}
                        >
                            <strong>{user.name}</strong>
                            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                                {user.email}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;