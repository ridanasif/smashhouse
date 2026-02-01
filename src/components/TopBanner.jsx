import { LuPhone } from 'react-icons/lu';
import { useLanguage } from '../context/LanguageContext';

const TopBanner = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="bg-black text-white py-2 sticky top-0 z-60">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center text-sm">
                    {/* Contact Number */}
                    <a
                        href="tel:+351935555765"
                        className="flex items-center gap-2 hover:text-orange transition-colors"
                    >
                        <LuPhone size={14} />
                        <span>+351 935 555 765</span>
                    </a>

                    {/* Language Selector */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => toggleLanguage('EN')}
                            className={`font-medium hover:text-orange transition-colors ${language === 'EN' ? 'text-white' : 'text-white/60'}`}
                        >
                            EN
                        </button>
                        <span className="text-white/30">|</span>
                        <button
                            onClick={() => toggleLanguage('PT')}
                            className={`font-medium hover:text-orange transition-colors ${language === 'PT' ? 'text-white' : 'text-white/60'}`}
                        >
                            PT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
