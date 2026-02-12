import { useState, useRef, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useLanguage } from '../context/LanguageContext';

// Static data
const MENU_ITEMS = [
    { id: 1, image: 'https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/603645722_17920222770226471_6557888219711034965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MTIwMzgyNzQyMTQwMTIyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6iEZDtT5QqgQ7kNvwFWQlcp&_nc_oc=Adkyx0K1HhIeA2Mxb4U3EXcGHzounumtbcen65PSaLzakFo7UoTZdmz03Lt0kL0x4LY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuixQh5UgBTnyabuxpcDbuG874Wwic4hD9akg-11Jgumg&oe=6993F461' },
    { id: 2, image: 'https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/603645722_17920222770226471_6557888219711034965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MTIwMzgyNzQyMTQwMTIyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6iEZDtT5QqgQ7kNvwFWQlcp&_nc_oc=Adkyx0K1HhIeA2Mxb4U3EXcGHzounumtbcen65PSaLzakFo7UoTZdmz03Lt0kL0x4LY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuixQh5UgBTnyabuxpcDbuG874Wwic4hD9akg-11Jgumg&oe=6993F461' },
    { id: 3, image: 'https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/603645722_17920222770226471_6557888219711034965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MTIwMzgyNzQyMTQwMTIyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6iEZDtT5QqgQ7kNvwFWQlcp&_nc_oc=Adkyx0K1HhIeA2Mxb4U3EXcGHzounumtbcen65PSaLzakFo7UoTZdmz03Lt0kL0x4LY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuixQh5UgBTnyabuxpcDbuG874Wwic4hD9akg-11Jgumg&oe=6993F461' },
    { id: 4, image: 'https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/603645722_17920222770226471_6557888219711034965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MTIwMzgyNzQyMTQwMTIyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6iEZDtT5QqgQ7kNvwFWQlcp&_nc_oc=Adkyx0K1HhIeA2Mxb4U3EXcGHzounumtbcen65PSaLzakFo7UoTZdmz03Lt0kL0x4LY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuixQh5UgBTnyabuxpcDbuG874Wwic4hD9akg-11Jgumg&oe=6993F461' },
    { id: 5, image: 'https://instagram.fccj9-1.fna.fbcdn.net/v/t51.82787-15/603645722_17920222770226471_6557888219711034965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=Mzc5MTIwMzgyNzQyMTQwMTIyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6iEZDtT5QqgQ7kNvwFWQlcp&_nc_oc=Adkyx0K1HhIeA2Mxb4U3EXcGHzounumtbcen65PSaLzakFo7UoTZdmz03Lt0kL0x4LY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccj9-1.fna&_nc_gid=wR3-7RflRH8wgznMBL_E_w&oh=00_AfuixQh5UgBTnyabuxpcDbuG874Wwic4hD9akg-11Jgumg&oe=6993F461' },
];

const Menu = () => {
    const { t } = useLanguage();
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScroll);
            return () => carousel.removeEventListener('scroll', checkScroll);
        }
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth / 3;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="menu" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex justify-between items-start mb-10">
                    {/* Left - Title */}
                    <div>
                        <h2 className="heading-section text-black">
                            {t.menu.heading}
                        </h2>
                        <p className="text-subtitle mt-2">
                            {t.menu.subtitle}
                        </p>
                    </div>

                    {/* Right - Controls */}
                    <div className="flex gap-2 md:gap-3 shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollLeft
                                ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                            aria-label="Previous"
                        >
                            <LuChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${canScrollRight
                                ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                            aria-label="Next"
                        >
                            <LuChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {MENU_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] snap-start"
                        >
                            <div className="aspect-9/16 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                                <img
                                    src={item.image}
                                    alt={`Menu item ${item.id}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
