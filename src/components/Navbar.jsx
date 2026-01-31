import { useState, useEffect } from "react";
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

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const id = href.replace('#', '');
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm py-2 ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
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
                        <a href="#" onClick={(e) => scrollToSection(e, "#")} className="block">
                            <img src="/images/logo.webp" alt="smash house logo" className="w-16 md:w-20 rounded-full transition-all duration-300" />
                        </a>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
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

            {/* Mobile Nav - Absolute position so it overlays content */}
            <div
                className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
                    }`}
            >
                <div className="container mx-auto px-4 flex flex-col space-y-4 w-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-medium py-2 border-b border-gray-100 hover:text-orange transition-colors text-center"
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
            </div>
        </header>
    );
};

export default Navbar;