import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Animation variants defined outside
const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

const contentVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
};

const IMAGES = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",

];

const Carousel = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroText = t.carousel.hero;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-black">
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 w-full h-full transform-gpu"
                >
                    <img
                        src={IMAGES[currentSlide]}
                        alt="Smash Craft Burger"
                        className="w-full h-full object-cover"
                        decoding="async"
                        fetchpriority="high"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start pt-[100px]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl text-white text-center md:text-left">
                        <motion.div
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="heading-hero text-white">
                                <div className="block">{heroText.line1}</div>
                                <div className="block">{heroText.line2}</div>
                                <div className="block">{heroText.line3}</div>
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-0 right-0 z-10">
                <div className="flex justify-center gap-3">
                    {IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
