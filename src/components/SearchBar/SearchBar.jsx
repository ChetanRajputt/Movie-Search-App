import React, { useEffect,useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const SearchBar = ({ setOpenSearch }) => {
    const [searchText, setSearchText] = useState('');

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Escape') {
    //         setOpenSearch(false);
    //     }
    // };

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'; 
    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.body.style.overflow = 'auto'; 
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#222428] rounded-md w-[90%] max-w-2xl h-[80vh] relative shadow-lg">
                <div className="flex items-center gap-2 w-full bg-[#1B1B1B] p-3 rounded-t-md">
                    <BsArrowLeft
                        onClick={() => setOpenSearch(false)}
                        size={25}
                        className="text-gray-400 cursor-pointer"
                    />
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full p-2 text-sm text-white bg-transparent outline-none"
                        type="text"
                        placeholder="Search Artists, Songs, Albums"
                    />
                </div>
                <div className="p-4 overflow-y-auto">
                    <h1 className="text-lg font-bold text-gray-300">Top Results</h1>
                    {/* results */}
                    <p className="text-gray-400">No results found</p>
                </div>
                <button
                    onClick={() => setOpenSearch(false)}
                    className="absolute text-gray-400 top-3 right-3 hover:text-white"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
