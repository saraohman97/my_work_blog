import { signOut } from '@firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../firebase';
import { HiArrowLongRight } from 'react-icons/hi2'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { dispatch, currentUser } = useContext(AuthContext)

  const logout = () => {
    signOut(auth).then(() => {
      dispatch({ type: "LOGOUT", payload: currentUser })
    }).catch((error) => {
      console.log('error')
    });
  }

  return (
    <div className='my-14 flex justify-between container mx-auto'>
      <Link to='/' className='cursor-pointer'>
        <h2 className='text-indigo-500 text-2xl'>Workblog</h2>
        <h4 className='text-lg text-gray-400'>Frontend Developer</h4>
      </Link>
      {currentUser && (
        <div>
          <Link
            to='/create'
            className='flex items-center gap-3 text-indigo-500'>
            Create<HiArrowLongRight />
          </Link>
          <button
            onClick={logout}
            className='flex items-center gap-3 text-indigo-500'>
            Logout <HiArrowLongRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar