import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Find Us", href: "#find-us" },
    ];

    const socials = [
        { icon: FaInstagram, href: "#" },
        { icon: FaFacebookF, href: "#" },
        { icon: FaTiktok, href: "#" },
    ];

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="/images/logo.webp"
                            alt="smash house logo"
                            className="w-24 mb-6 rounded-full"
                        />
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Bringing the authentic smash burger experience to Portugal.
                            Crispy edges, juicy patties, and unforgettable flavor in every bite.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social, index) => (
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
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-orange uppercase tracking-wider">Quick Links</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
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
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-orange uppercase tracking-wider">Find Us</h3>
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
