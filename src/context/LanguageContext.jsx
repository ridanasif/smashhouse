import { createContext, useState, useContext, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to EN, or verify if localStorage has a preference
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang === 'PT' ? 'PT' : 'EN';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = (lang) => {
        if (lang === 'EN' || lang === 'PT') {
            setLanguage(lang);
        }
    };

    const t = TRANSLATIONS[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
