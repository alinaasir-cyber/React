import { LanguageProvider } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
    return (
        <LanguageProvider>
            <LanguageSwitcher />
        </LanguageProvider>
    );
}

export default App;