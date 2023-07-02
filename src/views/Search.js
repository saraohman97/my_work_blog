import React from 'react'
import Navbar from '../components/Navbar'
import { BsSearch } from 'react-icons/bs';
import PostList from '../components/PostList';

const Search = () => {


  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* search engine */}
      <div className='flex mb-40 container mx-auto' >
        <input type="text" className='rounded-s-full shadow-md py-2 px-8 w-80' placeholder='Search...' />
        <button className='rounded-e-full bg_pink p-2 w-20 flex items-center justify-center'> <BsSearch className='text-black text-2xl' /></button>
      </div >

      <PostList />
    </div>
  )
}

export default Search