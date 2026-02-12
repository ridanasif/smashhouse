import Ticker from './Ticker';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../data/config';

const FindUs = () => {
    const { t } = useLanguage();
    const visitUsItems = Array(10).fill(t.findUs.tickerText);

    return (
        <section id="find-us" className="relative w-full h-[60vh] md:h-screen bg-gray-100">
            {/* Google Map Embed */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    title={`${SITE_CONFIG.brand.name} Location`}
                    src={SITE_CONFIG.contact.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                ></iframe>
            </div>

            {/* Overlay Ticker - Positioned at Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <Ticker items={visitUsItems} />
            </div>
        </section>
    );
};

export default FindUs;
