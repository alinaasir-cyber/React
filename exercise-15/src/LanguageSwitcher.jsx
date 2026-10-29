import { useLanguage } from './LanguageContext';

function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
           
            <button 
                onClick={toggleLanguage}
                style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
            >
                {language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            </button>

           
            <h1 style={{ fontSize: '36px', margin: 0 }}>
                {language === 'en' ? 'Welcome' : '¡Bienvenido!'}
            </h1>
        </div>
    );
}

export default LanguageSwitcher;