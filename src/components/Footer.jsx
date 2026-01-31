import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

// Static data
const LINKS = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Find Us", href: "#find-us" },
];

const SOCIALS = [
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaTiktok, href: "#" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="/images/logo.webp"
                            alt="smash house logo"
                            className="w-24 mb-6 rounded-full mx-auto md:mx-0"
                        />
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                            Bringing the authentic smash burger experience to Portugal.
                            Crispy edges, juicy patties, and unforgettable flavor in every bite.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {SOCIALS.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links & Contact Group */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-8">
                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h3 className="footer-heading mb-6">Quick Links</h3>
                            <ul className="space-y-4">
                                {LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact/Location */}
                        <div className="text-center md:text-left">
                            <h3 className="footer-heading mb-6">Find Us</h3>
                            <p className="text-gray-400 mb-4 hover:text-white transition-colors">
                                Odivelas, Lisbon<br />
                                Portugal
                            </p>
                            <div className="flex flex-col gap-2 text-gray-400">
                                <a href="mailto:info@smashhouse.pt" className="hover:text-orange transition-colors">info@smashhouse.pt</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex justify-center items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Smash House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
