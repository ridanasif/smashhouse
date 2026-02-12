import { motion } from 'framer-motion';
import { PiStarFourFill } from "react-icons/pi";
import { useLanguage } from '../context/LanguageContext';

// Animation config defined outside
const tickerAnimation = {
    initial: { x: 0 },
    animate: { x: "-100%" },
    transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
    }
};

const Ticker = ({ items }) => {
    const { t } = useLanguage();
    // specific items prop overrides default translated items
    const displayItems = items || t.ticker.items;

    return (
        <div className="bg-orange h-[10vh] flex items-center overflow-hidden border-y border-black/10">
            <div className="flex whitespace-nowrap">
                {/* We double the content to create a seamless loop */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={tickerAnimation.initial}
                        animate={tickerAnimation.animate}
                        transition={tickerAnimation.transition}
                        className="flex items-center"
                    >
                        {displayItems.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="ticker-text text-white">
                                    {item}
                                </span>
                                <PiStarFourFill className="text-white mx-4 md:mx-8 w-6 h-6 md:w-8 md:h-8" />
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
