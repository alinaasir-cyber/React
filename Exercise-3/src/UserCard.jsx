// function UserCard() {
//     return (
//         <div className="user-card">
//             <h2>John Doe</h2>
//             <p>john.doe@example.com</p>
//         </div>
//     );
// }

// export default UserCard;

function UserCard({ name, email }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}

export default UserCard;