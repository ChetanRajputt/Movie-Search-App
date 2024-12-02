import React, { useState } from 'react';

const SearchBox = ({ searchQuery,setSearchQuery ,handleSearchMovies}) => {
    return (
        <div className="flex items-center justify-center gap-3">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies..."
                className="w-full px-4 py-4 text-white bg-transparent border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearchMovies}
                className="px-6 py-4 w-[200px] border-blue-50 border text-xl rounded-full font-bold text-white duration-300 bg-blue-500 bg-transparent hover:border-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBox;
