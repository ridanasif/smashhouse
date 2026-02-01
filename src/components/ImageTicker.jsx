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
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/621831126_17913856602271904_4355824295662745540_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgxNzM5MTE0MTg3MjgzODM4NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=Y3dXkaNOv1MQ7kNvwEUx7Kn&_nc_oc=Adkdd8o-8bzail64xCmNZDPnI50jZzW-CUpIGtMBtFTd-pVyx0l392mGS2D8E2IqVSY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=A9mRUlf2UDwLhYSXD9rZ-g&oh=00_AfuV0299Dq_DAX0BcIkHtTnGltpFg4WM0pfxvNC8VPPYYg&oe=698422A9",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t39.30808-6/597460822_122179175636516225_6689016587860747647_n.jpg?stp=c0.171.1365.1706a_dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MDU3MzU2NDYyNjQ4MjgyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNjV4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=8yag1s_sPMoQ7kNvwGFKSRy&_nc_oc=Admq-HaKF8Zc79eJLCwb3dTZR8L_T4Blp2WM2L8xVOqQqmSw8rAAXrc0b17mQHviIXM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=Va787lKyf0sV25Kxf_SNdA&oh=00_AfudrKDL_v63wq3pg9JE1zRsGVaj_sX2yTFdoJG4M-YNeg&oe=698407CC",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t39.30808-6/594633649_122177778632516225_1047907892522500803_n.jpg?stp=c0.171.1365.1706a_dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc4MjU3MTAwNDg5NjU0NDMzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNjV4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=qfwvb9msUpYQ7kNvwHisOHg&_nc_oc=AdlFBvLct7jgrUo89zMxzHO-jkvFS14R708x20LxdIP7h7R3C1mrfF5ILFqcuTH_p6Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=Va787lKyf0sV25Kxf_SNdA&oh=00_AfvxSREGkzflFX-gwcruB86kPCHbeb2S8qTS4nlfKDYV5g&oe=69841E35",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/516526788_17891366670271904_3606202692132977272_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY3MjM1ODYyOTU4MzA5MzY0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=mBe0IycTxxEQ7kNvwFmxDMl&_nc_oc=Adls6Q972dwH2gDYfm1DR_pEkgD-WFi8HTpQfwYNj1Cr1Zm7o0CeHwNeXfa9qHhnrC4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=cDK2IofqKQ6LNX8eH8eoxg&oh=00_AfvdcOSwUSNyj3FeZikQqmuQzogQo4CklNb_Br6r-1gVAQ&oe=69842E02",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/566639371_17903221779271904_3213644410457061082_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc0NzEyNzgwNTkxNDk2OTA3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9r0wiue-J74Q7kNvwEX9uJD&_nc_oc=AdnVn-iY-E1DhLiYVKeC3Qr9M7gKJOi70hyjuhwLLXUvy4E47W9qyiv20SNa_Kc9FtU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=cDK2IofqKQ6LNX8eH8eoxg&oh=00_AfvKmvfdud6nJ76b92bB1IXrN-Clj6oOqBpKT4SkEMH6dQ&oe=69840FC1",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t39.30808-6/596655836_122178385682516225_2908771175561994639_n.jpg?stp=c0.171.1365.1706a_dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc4NTQwMzI5Nzc5Mjc5MDA1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNjV4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=7mr97cVnwkYQ7kNvwEbyGtv&_nc_oc=AdnHRqfscCzyYUmdq6qyiPyeXjBxxMIGGpiLRDRWiG9ranUjv7OOezY1ZPy0MEYnVEQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=Va787lKyf0sV25Kxf_SNdA&oh=00_AfthQEVa4p8d-8YsaCe2yXBxMAqtQMAv1OJTWA2tlaf4Ow&oe=69841099",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t39.30808-6/619853143_122184277814516225_5179019683805445878_n.jpg?stp=c0.171.1365.1706a_dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzgxOTU2NDYyMzUxMTQ3NDc0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNjV4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=MQU7wm1GafAQ7kNvwHUslbp&_nc_oc=AdkJj4CCipGJXdhhLBc2TdyPWPC6U6NQdM9tCX2hFfjjtueEi54l1zhNfLwV5FjC72M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=A9mRUlf2UDwLhYSXD9rZ-g&oh=00_AfsqX2DGIEDgVde_u3898LgLOFiitCJZ5VvytutA-jCcuw&oe=698422B3",
    "https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/613024125_17912124441271904_1486736541326371594_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzgwNjUxOTA5MjI3OTY5MjM1MDE3OTEyMTI0NDM4MjcxOTA0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzZ4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=ScvWe_3DBiYQ7kNvwHsk4ta&_nc_oc=AdkraBgRZoeFukBAUvKpo9VYcPIKijyyA5v6zTdjxoEIa6WjKZtgHv5_h9mcFx1rK8o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=A9mRUlf2UDwLhYSXD9rZ-g&oh=00_Afs6siJ6JCf2hudqJc8yEbxyizHyHA8jLBIWFvBaQ-gFIQ&oe=69841E0C",
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
                                className="shrink-0 w-[280px] md:w-[400px] h-[350px] md:h-[500px] rounded-xl overflow-hidden mx-2"
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
