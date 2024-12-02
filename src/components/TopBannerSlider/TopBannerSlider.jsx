import React, { useEffect, useRef, useState } from 'react';
import Container from '../Container/Container';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TopBannerSlider = () => {
    const banners = [
        'https://www.bollywoodhungama.com/wp-content/uploads/2021/01/Pushpa-banner.jpg',
        'https://www.bollywoodhungama.com/wp-content/uploads/2021/01/Sanak-Hope-Under-Siege-4.jpeg',
        'https://www.bollywoodhungama.com/wp-content/uploads/2019/01/Prithviraj-banner.jpg',
        'https://www.bollywoodhungama.com/wp-content/uploads/2017/07/Tanhajibanner.jpg',
        'https://i.ytimg.com/vi/AvjvZ7q2apE/maxresdefault.jpg',
    ];

    const sliderRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(true);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 900;
            setAutoScroll(false);
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 900;
            setAutoScroll(false);
        }
    };

    useEffect(() => {
        let interval;
        if (autoScroll) {
            interval = setInterval(() => {
                if (sliderRef.current) {
                    sliderRef.current.scrollLeft += 900;
                }
            }, 5000);
        }

        return () => clearInterval(interval); 
    }, [autoScroll]);

    return (
        <div className="relative">
            {/* <Container> */}
                <div>
                    <button
                        className="ml-12 p-1 bg-[#1B1B1B] rounded-full hidden md:inline absolute top-[50%] left-12 z-40 shadow-2xl text-gray-300 hover:text-white"
                        onClick={scrollLeft}
                    >
                        <FaChevronLeft size={30} />
                    </button>
                    <button
                        className="mr-12 p-1 bg-[#1B1B1B] rounded-full hidden md:inline absolute top-[50%] right-12 z-40 shadow-2xl text-gray-300 hover:text-white"
                        onClick={scrollRight}
                    >
                        <FaChevronRight size={30} />
                    </button>
                </div>

                <div>
                    <div
                        id="banner"
                        ref={sliderRef}
                        className="flex items-center justify-start p-4 overflow-x-auto slider scroll-smooth"
                    >
                        {banners.map((img, index) => (
                            <img
                                src={img}
                                key={index}
                                className="h-[150px] md:h-[320px] opacity-85 hover:opacity-80 px-2 cursor-pointer"
                                
                            />
                        ))}
                    </div>
                </div>
            {/* </Container> */}
        </div>
    );
};

export default TopBannerSlider;
