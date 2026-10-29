import { useState, useEffect } from 'react';
import { useContacts } from './ContactContext';

export default function ContactForm() {
    const { state, dispatch } = useContacts();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (state.editingContact) {
            setName(state.editingContact.name);
            setEmail(state.editingContact.email);
            setPhone(state.editingContact.phone);
        } else {
            setName('');
            setEmail('');
            setPhone('');
        }
    }, [state.editingContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) return;

        if (state.editingContact) {
            dispatch({
                type: 'EDIT_CONTACT',
                payload: { ...state.editingContact, name, email, phone }
            });
        } else {
            dispatch({
                type: 'ADD_CONTACT',
                payload: { id: Date.now(), name, email, phone, isFavorite: false }
            });
        }

        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>{state.editingContact ? 'Edit Contact' : 'Add New Contact'}</h3>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ padding: '6px', width: '100%', boxSizing: 'border-box' }}
                    required
                />
            </div>
            <button type="submit" style={{ padding: '6px 14px', cursor: 'pointer' }}>
                {state.editingContact ? 'Update Contact' : 'Add Contact'}
            </button>
        </form>
    );
}
