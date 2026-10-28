import UserList from './UserList';

function App() {
    // Tusaale xogta users-ka ah
    const sampleUsers = [
        { id: 1, name: "Ali Ahmed", email: "ali@example.com" },
        { id: 2, name: "Fatima Omar", email: "fatima@example.com" },
        { id: 3, name: "Mohamed Hassan", email: "mohamed@example.com" }
    ];

    return (
        <div>
            <UserList users={sampleUsers} />
        </div>
    );
}

export default App;