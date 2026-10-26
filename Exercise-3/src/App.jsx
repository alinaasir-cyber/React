// import UserCard from './UserCard';

// function App() {
//     return (
//         <div className="app-container">
//             <h1>Abdi Portfolio - React Components</h1>
          
//             <UserCard />
//         </div>
//     );
// }

// export default App;

import UserCard from './UserCard';

function App() {
    const users = [
        { id: 1, name: "Abdi Naasir", email: "cnaasirm60@gmail.com" },
        { id: 2, name: "Ahmed Ali", email: "ahmed@example.com" },
        { id: 3, name: "Fadumo Mohamed", email: "fadumo@example.com" },
        { id: 4, name: "Mohamed Yusuf", email: "mohamed@example.com" },
        { id: 5, name: "Amina Hassan", email: "amina@example.com" },
        { id: 6, name: "Liban Omar", email: "liban@example.com" },
        { id: 7, name: "Zahra Ibrahim", email: "zahra@example.com" },
        { id: 8, name: "Khalid Osman", email: "khalid@example.com" },
        { id: 9, name: "Nasra Abdi", email: "nasra@example.com" },
        { id: 10, name: "Cumar Farax", email: "cumar@example.com" }
    ];

    return (
        <div style={{ padding: '20px', margin: '' }}>
            <h1>User Profiles Directory</h1>
            {users.map(user => (
                <UserCard key={user.id} name={user.name} email={user.email} />
            ))}
        </div>
    );
}

export default App;