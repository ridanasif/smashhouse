import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import Button from "./Button";
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../data/config';

// Animation variants defined outside
const logoAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
};

const ORDER_URL = SITE_CONFIG.links.orderNow;

const Navbar = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { links, orderNow } = t.navbar;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div
            className={`transition-all duration-300 shadow-sm py-1 ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={logoAnimation.initial}
                        animate={logoAnimation.animate}
                        className="shrink-0"
                    >
                        <a href="#" onClick={(e) => scrollToSection(e, "#")} className="block">
                            <img src={SITE_CONFIG.brand.logo} alt={SITE_CONFIG.brand.logoAlt} className="w-14 md:w-16 rounded-full transition-all duration-300" />
                        </a>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8 items-center">
                            {links.map((link) => (
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
                            text={orderNow}
                            icon={LuShoppingBag}
                            href={ORDER_URL}
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
                className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 transition-[opacity,transform] duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
                    }`}
            >
                <div className="container mx-auto px-4 flex flex-col space-y-4 w-full">
                    {links.map((link) => (
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
                            text={orderNow}
                            icon={LuShoppingBag}
                            href={ORDER_URL}
                            target="_blank"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;