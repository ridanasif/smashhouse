import React from 'react';
import { motion } from 'framer-motion';
import { PiStarFourFill } from "react-icons/pi";

const Ticker = () => {
    const items = [
        "AUTHENTIC SMASH BURGERS",
        "100% HALAL",
        "SMASH IT",
        "BURGERS DONE RIGHT",
        "OPEN DAILY 12PM - 11PM",
        "ORDER ON UBER EATS"
    ];

    return (
        <div className="bg-orange py-4 overflow-hidden border-y border-black/10">
            <div className="flex whitespace-nowrap">
                {/* We double the content to create a seamless loop */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="flex items-center"
                    >
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-white font-bold text-xl md:text-3xl tracking-wider uppercase font-prompt">
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
