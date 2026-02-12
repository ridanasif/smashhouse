import { motion } from 'framer-motion';

// Animation config defined outside - same pattern as Ticker
const tickerAnimation = {
    initial: { x: 0 },
    animate: { x: "-100%" },
    transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
    }
};

// Static data - Food images from Instagram
const IMAGES = [
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/589347540_17918671395226471_2095763227612793458_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=Mzc4MTA4MDQ1OTMwNTA0OTk3NzE3OTE4NjcxMzg5MjI2NDcx.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyODJ4NDA1Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=hQCoblpWAKMQ7kNvwFpi2cu&_nc_oc=Adnub5bQnFtpinR2muELMcgQ2NevyKrP9Nm81efIXyCnEB7dlPr63RyTPn4enrRVRmE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_Afs--n77coW-Mpcj2DRcZGJPaqxroWxc35hn3eYU0EzKXQ&oe=6993CE98",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/523325452_17903718315226471_7726852843244141751_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzY4MzE5MzY1OTk5OTAwNDc1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=c_SCCN7rHRcQ7kNvwFpyfq-&_nc_oc=AdmedUJebuGO_l4iwsmcXpDijm6Ugkyv6-H9LswzcoKaq3CtI8xDvaPksBdKA-pYxNM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=phm1HrfTmdGUVzqgT8kDag&oh=00_Afv0enokbZvgvD6uMndcYI5WxDdwjCbbzYY5SmC2c8o2Vw&oe=6993F708",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.75761-15/509626226_17899603251226471_4421321755658117151_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzY1Nzg2NjQ5NTYwMjgyNDY0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=-DFT8jjIwGIQ7kNvwEwpSF3&_nc_oc=AdlpMEIwNLKEhCQ6pDa72f6JEdZb3zmniOr6plaz0ec38ofKqSFCi6X1incLX5dKr0s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=phm1HrfTmdGUVzqgT8kDag&oh=00_AfvSLirY7sj-jdABaOCvcBlh5JPb2u2A2t7KU4ZEzKzPtQ&oe=6993E906",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/586649021_17855889027571267_4563145696105224687_n.webp?_nc_cat=108&ig_cache_key=Mzc3NzQ2NTA1OTE5MTIxNjYwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=mNoj224EVYkQ7kNvwGpuY6c&_nc_oc=AdmTsWNt-vXTDrv4MkeXQBq5WJfPc8RC950uUHwgu0DiuzCeOQG2PjnXdJlxf6HoKbc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfsGVb8wEX0jH1MOW3VWb5rUvvP-YKyI33P_t5H3X5X6Cg&oe=6993CCAD",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/626299164_17926202127226471_4511189952671818310_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzgyODIyMDk2ODQxNDI2NjA4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=8rv6IwvgHSYQ7kNvwEbfBnA&_nc_oc=Adkk6Yhq6HZZjDSN4LOp0Mlntyix8FCAygsFOqI1DoNdFGv7X8n77bcfZG7KLA9cS4c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuKeWB2mK4P-I9KcUdI88LyX8WmWbyKdHbbcVG9D-ZvUA&oe=6993E02B",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/604600536_17920666314226471_6736502371462954434_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc5NDA1MDEyNjIxNDYwMDAwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxNy5zZHIuQzMifQ%3D%3D&_nc_ohc=rv0qx3pkgzcQ7kNvwEH0xG8&_nc_oc=AdlaxygDIMC7e1CTmWh7ypfKpc7i-LB-H5E8hF7ftW9H9VGiKsrF_8-zrhzUT6c61gA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_Aftl18nWKPjVvi8hmu-31sZr_j_Vd2vSlCayVZp6iyilUw&oe=6993C88F",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/560057268_17912097051226471_2212407477968304071_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzczNTQ3MTEwNjg0MTk4NDYxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc1Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=xqBjsc-HIZgQ7kNvwFO0NgZ&_nc_oc=AdkZDHqXlMgVRbFTAFiWyjhKp5ivewHtMEb-IDaUC1ofiPEUHMCMPkWmYBTBmapCAto&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=phm1HrfTmdGUVzqgT8kDag&oh=00_AftK-O0TMlKuBXvOCc4Jwp_nLQyntaJMwjzEI2V8qqezTg&oe=6993E862",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/605573983_17920755747226471_7691398663165422926_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc5NDY2ODI1NzA2OTAzNjA4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDB4MTYwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=44sIXmpVVh4Q7kNvwFXVqc4&_nc_oc=AdkpIH0rtavkIMXNJ1KcblMEO-Hxu2IGdP7_rlZ0D_BXQxuCtkyx57J7W_pen8WkHLU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_Afv-vP7Jfu31bOVVhfiou1zOr5fANMP5tDTmJLL87H28xw&oe=6993E265",
];

const ImageTicker = () => {
    return (
        <div className="bg-white py-6 overflow-hidden">
            <div className="flex">
                {/* Two identical sets side by side - same pattern as Ticker */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={tickerAnimation.initial}
                        animate={tickerAnimation.animate}
                        transition={tickerAnimation.transition}
                        className="flex shrink-0"
                    >
                        {IMAGES.map((src, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-[240px] md:w-[350px] h-[300px] md:h-[450px] rounded-xl overflow-hidden mx-2"
                            >
                                <img
                                    src={src}
                                    alt={`Food ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ImageTicker;
