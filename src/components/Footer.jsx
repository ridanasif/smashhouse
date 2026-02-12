import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../data/config';

const SOCIAL_ICONS = {
    Instagram: FaInstagram,
    Facebook: FaFacebookF,
    TikTok: FaTiktok,
};

const SOCIALS = SITE_CONFIG.socials.map(social => ({
    icon: SOCIAL_ICONS[social.name],
    href: social.url
}));

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const { links, description, quickLinks, findUs, location, country, rights } = t.footer;

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src={SITE_CONFIG.brand.logo}
                            alt={SITE_CONFIG.brand.logoAlt}
                            className="w-24 mb-6 rounded-full mx-auto md:mx-0"
                        />
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                            {description}
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {SOCIALS.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
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
                            <h3 className="footer-heading mb-6">{quickLinks}</h3>
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
                        <div className="text-center md:text-left">
                            <h3 className="footer-heading mb-6">{findUs}</h3>
                            <p className="text-gray-400 mb-4 hover:text-white transition-colors">
                                {location}<br />
                                {country}
                            </p>
                            <div className="flex flex-col gap-2 text-gray-400">
                                <a href={SITE_CONFIG.contact.phoneHref} className="hover:text-white transition-colors">{SITE_CONFIG.contact.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex justify-center items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} {SITE_CONFIG.brand.name}. {rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
