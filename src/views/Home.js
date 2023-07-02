import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import Header from '../components/Header'
import Login from '../components/Login'
import PostList from '../components/PostList'

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [sQuery, setSQuery] = useState('')

  return (
    <div>
      <Header setOpenLogin={setOpenLogin} />

      {openLogin && (
        <Login setOpenLogin={setOpenLogin} />
      )}

      <PostList sQuery={sQuery} />

      <Link to='/search' className='flex justify-center items-center fixed right-0 bg_pink top-36 rounded-s-full py-4 px-10'>
        <BsSearch className='text-2xl' />
      </Link>
    </div>
  )
}

export default Home