import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className='sticky top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-3 text-white bg-slate-950'>
        <Link to={"/"}><h1 className='flex items-center text-3xl font-bold duration-500 cursor-pointer hover:translate-x-1 f-2'><span><img className='mr-2 w-7 shadow-3xl' src={"https://streamshot.netlify.app/assets/streamlogo-adae6b0b.png"} /> </span><span className='text-red-400'>Indore</span>Movies</h1></Link>
        <ul className='hidden md:flex f-1'>
            <li className='px-2 text-xl duration-200 cursor-pointer hover:text-sky-400'>Trending</li>
            <li className='px-2 text-xl duration-200 cursor-pointer hover:text-sky-400'>Latest</li>
            <li className='px-2 text-xl duration-200 cursor-pointer hover:text-sky-400'>Tv & Shows</li>
            <li className='px-2 text-xl duration-200 cursor-pointer hover:text-sky-400'>Movies</li>
        </ul>


        {
          menuToggle
          ?
                <AiOutlineClose onClick={() => setMenuToggle(!menuToggle)} size={30} className='md:hidden' />
                :
                <HiMenuAlt1 onClick={() => setMenuToggle(!menuToggle)} size={30} className='md:hidden' />
        }

        {/* for mobile */}
        <div className={`md:hidden w-[100%] h-screen flex flex-col items-center duration-500 bg-gray-950 fixed top-[8%] {left-0} mobile-menu z-30
           ${menuToggle ? 'left-0' : 'left-[-100%]'}
         `}>
            <ul className='mt-3 f-1'>
                <li className='py-2 text-3xl duration-200 cursor-pointer hover:text-sky-400'>Trending</li>
                <li className='py-2 text-3xl duration-200 cursor-pointer hover:text-sky-400'>Latest</li>
                <li className='py-2 text-3xl duration-200 cursor-pointer hover:text-sky-400'>Tv & Shows</li>
                <li className='py-2 text-3xl duration-200 cursor-pointer hover:text-sky-400'>Movies</li>
                </ul>
        </div>
    </nav >
)
}


export default Header
