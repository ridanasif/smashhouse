import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

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
    const { t } = useLanguage();
    const { about } = t;

    return (
        <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                        <motion.div {...textAnimation}>
                            <span className="section-label block">
                                {about.label}
                            </span>
                            <h2 className="heading-section mb-8 text-black">
                                {about.headingPart1} <br />
                                <span className="text-orange">{about.headingPart2}</span>
                            </h2>
                            <p
                                className="text-body mb-6"
                                dangerouslySetInnerHTML={{ __html: about.paragraph1 }}
                            />
                            <p className="text-body">
                                {about.paragraph2}
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
                                src="https://instagram.fccj9-1.fna.fbcdn.net/v/t51.71878-15/564471921_1132872245473294_847758921091455926_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc0MTA1ODk4Mjg0OTgwNzE1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=KOD3DPU5fkAQ7kNvwGqv9DT&_nc_oc=AdlcKkTEJHYEjxgukIFoHpSTL2ZlRK7sppuVq3pcnULDP50p9aAUVeKlHfeq6uwLxys&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=mFPwIfWfX1ErrlO_AkLbYA&oh=00_AfupN4KGvlJLCG1KpMnfsfNAn0VvmyXh1XwY7Sj5hrZUpQ&oe=6993DEF7"
                                alt="Delicious smash burger red background"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Front Image (Right/Bottom) */}
                        <motion.div
                            {...frontImageAnimation}
                            className="absolute right-0 bottom-0 w-3/4 md:w-2/3 h-3/4 overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <img
                                src="https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/626299164_17926202127226471_4511189952671818310_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=111&ig_cache_key=MzgyODIyMDk2ODQxNDI2NjA4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=8rv6IwvgHSYQ7kNvwEbfBnA&_nc_oc=Adkk6Yhq6HZZjDSN4LOp0Mlntyix8FCAygsFOqI1DoNdFGv7X8n77bcfZG7KLA9cS4c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuXtQamJmWxaOg9aVjd9LpXYldX8AEtW002aHKQaWzCbg&oe=6993E02B"
                                alt="Holding a burger against blue sky"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
