import React from 'react'
import { HiArrowLongUp } from 'react-icons/hi2';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    return (
        <div
            className='bg_pink w-full flex justify-between items-center px-20 py-4'
            onClick={scrollToTop}
        >
            <HiArrowLongUp className='text-xl' />
            <HiArrowLongUp className='text-xl' />
            <HiArrowLongUp className='text-xl' />
            <p>Click to get to the top (not career-wise)</p>
            <HiArrowLongUp className='text-xl' />
            <HiArrowLongUp className='text-xl' />
            <HiArrowLongUp className='text-xl' />
        </div>
    )
}

export default Footer