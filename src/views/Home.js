import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, doc, deleteDoc } from '@firebase/firestore'
import { db } from '../firebase'

import Header from '../components/Header'
import Login from '../components/Login'
import Post from '../components/Post'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false)


  return (
    <div>
      <Header setOpenLogin={setOpenLogin} />

      {openLogin && (
        <Login setOpenLogin={setOpenLogin} />
      )}

      <PostList />

      <Link to='/search' className='flex justify-center items-center fixed right-0 bg_pink top-36 rounded-s-full py-4 px-10'>
        <BsSearch className='text-2xl' />
      </Link>
    </div>
  )
}

export default Home