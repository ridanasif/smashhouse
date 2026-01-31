import { useState, useRef, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// Static data
const MENU_ITEMS = [
    { id: 1, image: '/images/menu/menu-1.jpeg' },
    { id: 2, image: '/images/menu/menu-2.jpeg' },
    { id: 3, image: '/images/menu/menu-3.jpeg' },
    { id: 4, image: '/images/menu/menu-4.jpeg' },
    { id: 5, image: '/images/menu/menu-5.jpeg' },
];

const Menu = () => {
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
                            Our Burgers
                        </h2>
                        <p className="text-subtitle mt-2">
                            Freshly Made. Fully Loaded.
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
