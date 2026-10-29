import { createContext, useReducer, useContext } from 'react';

const ContactContext = createContext();

const initialState = {
    contacts: [],
    editingContact: null
};

function contactReducer(state, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case 'EDIT_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c),
                editingContact: null
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            };
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                contacts: state.contacts.map(c =>
                    c.id === action.payload ? { ...c, isFavorite: !c.isFavorite } : c
                )
            };
        case 'SET_EDITING':
            return {
                ...state,
                editingContact: action.payload
            };
        default:
            return state;
    }
}

export function ContactProvider({ children }) {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactContext);
}
