import Ticker from './Ticker';

// Static data
const VISIT_US_ITEMS = Array(10).fill("VISIT US");

const FindUs = () => {

    return (
        <section id="find-us" className="relative w-full h-[60vh] md:h-screen bg-gray-100">
            {/* Google Map Embed */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    title="Smash House Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.7627852434375!2d-9.178708400000001!3d38.7920721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19334e73e8852f%3A0xedb96a776fbb1403!2sSmash%20House%20Burgers!5e0!3m2!1sen!2sin!4v1769881034504!5m2!1sen!2sin"
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
                <Ticker items={VISIT_US_ITEMS} />
            </div>
        </section>
    );
};

export default FindUs;
