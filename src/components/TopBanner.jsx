import { LuPhone } from 'react-icons/lu';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../data/config';

const TopBanner = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="bg-black text-white py-1 relative z-60">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center text-sm">
                    {/* Contact Number */}
                    <a
                        href={SITE_CONFIG.contact.phoneHref}
                        className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                    >
                        <LuPhone size={14} />
                        <span>{SITE_CONFIG.contact.phone}</span>
                    </a>

                    {/* Language Selector */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => toggleLanguage('EN')}
                            className={`font-medium hover:text-gray-300 transition-colors ${language === 'EN' ? 'text-white' : 'text-white/60'}`}
                        >
                            EN
                        </button>
                        <span className="text-white/30">|</span>
                        <button
                            onClick={() => toggleLanguage('FR')}
                            className={`font-medium hover:text-gray-300 transition-colors ${language === 'FR' ? 'text-white' : 'text-white/60'}`}
                        >
                            FR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
