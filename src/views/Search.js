import React from 'react'
import Navbar from '../components/Navbar'
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div>
      <Navbar />
      {/* Search engine */}
      <div className='flex mb-14' >
        <input type="text" className='rounded-s-full shadow-md py-2 px-8 w-80' placeholder='Search...' />
        <button className='rounded-e-full bg_pink p-2 w-20 flex items-center justify-center'> <FiSearch className='text-black text-2xl' /></button>
      </div >
    </div>
  )
}

export default Search