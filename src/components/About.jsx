import { motion } from 'framer-motion';

// Animation variants defined outside
const textAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
};

const backImageAnimation = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.2 }
};

const frontImageAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.4 }
};

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-[#fffbf2] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                        <motion.div {...textAnimation}>
                            <span className="section-label block">
                                About Us
                            </span>
                            <h2 className="heading-section mb-8 text-black">
                                BIG BURGERS. <br />
                                <span className="text-orange">FULL SATISFACTION.</span>
                            </h2>
                            <p className="text-body mb-6">
                                Born in the vibrant streets of <span className="font-bold text-black">Lisbon, Portugal</span>, smash house started with a simple obsession: perfecting the crust.
                            </p>
                            <p className="text-body">
                                We believe a burger isn't just food; it's an experience. Our journey began in a small kitchen in Odivelas, where we smashed our first patty, locking in that irresistible flavor. Today, we bring that authentic, juicy, crispy-edged goodness to every plate, serving not just a meal, but a piece of our passion.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center">
                        {/* Back Image (Left/Top) */}
                        <motion.div
                            {...backImageAnimation}
                            className="absolute left-0 top-0 w-3/4 md:w-2/3 h-3/4 overflow-hidden rounded-2xl"
                        >
                            <img
                                src="https://instagram.fccj9-1.fna.fbcdn.net/v/t39.30808-6/595342667_122177737982516225_1136786333689649736_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc4MjQyMDI5MjI2Mjc2NDgzMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2Mzh4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=Sno5ewuC10sQ7kNvwEXZo6f&_nc_oc=Admewtxyj6URFSmI1JxGHkvFQwmWrf8HNxyEHCVqKR803rgaF0Ym1cJVNmK7qxis4NU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=x_9vhvs1veOOUt0PeIMrzQ&oh=00_Aft6zv-kdSbiUyoWi44vYk9-RwrklqSR3mmlzZPDkWTCFQ&oe=6983F22E"
                                alt="Delicious smash burger red background"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 will-change-transform"
                            />
                        </motion.div>

                        {/* Front Image (Right/Bottom) */}
                        <motion.div
                            {...frontImageAnimation}
                            className="absolute right-0 bottom-0 w-3/4 md:w-2/3 h-3/4 overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <img
                                src="https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/530693182_17895327912271904_3696134357830788861_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08_tt6&_nc_cat=108&ig_cache_key=MzY5NjM2NTc4MjQ1MjcyNjE4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=GtoE-_eWNNEQ7kNvwFyHlWo&_nc_oc=AdndFU18mNwYVsz4irbUmVVFLslWQWClPc3-VC4aGEna4yGX3nBoB9x21CWYpAgGA6M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=voHPXk8bHAT6tCoMO6VE2g&oh=00_AfsM0j7YYb7WALdjNJTkbPeb45hkzDnfrYfzb8gB2ZZPJg&oe=69841761"
                                alt="Holding a burger against blue sky"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 will-change-transform"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
