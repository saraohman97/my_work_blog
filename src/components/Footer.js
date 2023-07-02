import React from 'react'
import { HiArrowLongUp } from 'react-icons/hi2';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div
            className='w-full flex justify-center gap-4 items-center px-20 py-4 cursor-pointer border border-gray-400'
            onClick={scrollToTop}
        >
            <p>Click to get to the top</p>
            <HiArrowLongUp />
        </div>
    )
}

export default Footer