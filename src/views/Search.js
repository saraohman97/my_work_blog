import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { BsSearch } from 'react-icons/bs';
import PostList from '../components/PostList';

const Search = () => {
  const [sQuery, setSQuery] = useState('')

  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* search engine */}
      <div className='flex container mx-auto' >
        <input
          type="text"
          className='rounded-s-full shadow-md py-2 px-8 w-80'
          placeholder='Search...'
          onChange={e => setSQuery(e.target.value)}
        />
        <button className='rounded-e-full bg_pink p-2 w-20 flex items-center justify-center'> <BsSearch className='text-black text-2xl' /></button>
      </div >
      <p className='container mx-auto text-gray-300 mb-40 mt-4 pl-10'>*Search on title</p>

      <PostList sQuery={sQuery} />
    </div>
  )
}

export default Search