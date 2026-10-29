import { useContacts } from './ContactContext';

export default function ContactList() {
    const { state, dispatch } = useContacts();

    return (
        <div>
            <h3>Contacts List</h3>
            {state.contacts.length === 0 ? (
                <p>No contacts found.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {state.contacts.map((contact) => (
                        <li
                            key={contact.id}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: contact.isFavorite ? '#fff9c4' : '#fff'
                            }}
                        >
                            <h4>{contact.name} {contact.isFavorite && '⭐'}</h4>
                            <p style={{ margin: '4px 0' }}>Email: {contact.email}</p>
                            <p style={{ margin: '4px 0' }}>Phone: {contact.phone}</p>

                            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                <button
                                    onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: contact.id })}
                                    style={{ padding: '4px 8px', cursor: 'pointer' }}
                                >
                                    {contact.isFavorite ? 'Unfavorite' : 'Favorite'}
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'SET_EDITING', payload: contact })}
                                    style={{ padding: '4px 8px', cursor: 'pointer' }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'DELETE_CONTACT', payload: contact.id })}
                                    style={{ padding: '4px 8px', cursor: 'pointer', backgroundColor: '#ff5252', color: 'white', border: 'none' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
