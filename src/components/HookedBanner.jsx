import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Animation config defined outside
const textAnimation = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const HookedBanner = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2400&auto=format&fit=crop"
                    alt="Juicy burger on orange background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:via-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 w-full z-10 flex items-end justify-center">
                <motion.h2
                    {...textAnimation}
                    className="text-[12vw] md:text-[10vw] font-black text-white leading-none text-center uppercase drop-shadow-lg"
                >
                    {t.hookedBanner.text}
                </motion.h2>
            </div>
        </section>
    );
};

export default HookedBanner;
