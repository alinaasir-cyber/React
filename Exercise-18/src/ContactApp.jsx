import { ContactProvider } from './ContactContext';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default function ContactApp() {
    return (
        <ContactProvider>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '450px' }}>
                <h2>Contact Management App</h2>
                <ContactForm />
                <ContactList />
            </div>
        </ContactProvider>
    );
}