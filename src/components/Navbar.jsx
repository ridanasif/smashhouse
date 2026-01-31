import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Find Us", href: "#find-us" },
    ];

    const orderUrl = "https://www.ubereats.com/store/smash-house-odivelas/KC9OWAyVUySObwDbwi-11A?diningMode=DELIVERY&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm py-2 ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="shrink-0"
                    >
                        <img src="/images/logo.webp" alt="smash house logo" className="w-16 md:w-20 transition-all duration-300" />
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="font-medium hover:text-orange transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Button
                            text="Order Now"
                            icon={LuShoppingBag}
                            href={orderUrl}
                            target="_blank"
                        />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-black focus:outline-none"
                        >
                            {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium py-2 border-b border-gray-50 hover:text-orange transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-2">
                                <Button
                                    text="Order Now"
                                    icon={LuShoppingBag}
                                    href={orderUrl}
                                    target="_blank"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;