import { LuPhone } from 'react-icons/lu';

const TopBanner = () => {
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
                        <button className="font-medium hover:text-orange transition-colors text-white">
                            EN
                        </button>
                        <span className="text-white/30">|</span>
                        <button className="font-medium hover:text-orange transition-colors text-white/60">
                            PT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
