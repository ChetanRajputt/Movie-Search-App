import React from 'react'

const Container = ({ children }) => {
    return <div className='w-full md:max-w-[1240px] mx-auto px-4'>
        {children}
    </div>;
}

export default Container
