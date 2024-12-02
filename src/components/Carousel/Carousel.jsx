import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import MovieCard from './MovieCard';

const Carousel = ({ movies }) => {
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 800;
    };

    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 800;
    };

    return (
        <div className="relative">
            <button
                className="absolute top-[50%] z-50 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/80 text-white cursor-pointer"
                onClick={scrollLeft}
            >
                <BsChevronCompactLeft size={30} />
            </button>
            <button
                className="absolute top-[50%] z-50 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/80 text-white cursor-pointer"
                onClick={scrollRight}
            >
                <BsChevronCompactRight size={30} />
            </button>

            <div
                id="content"
                className="relative flex items-center justify-start p-4 mt-8 overflow-x-auto carousel scroll-smooth"
            >
                {movies && movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
