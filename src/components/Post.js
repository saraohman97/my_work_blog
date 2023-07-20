import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

const Post = ({ post, handleDelete }) => {
    const { currentUser } = useContext(AuthContext)
    const [deletePopup, setDeletePopup] = useState(false)

    const date = () => {
        if (post.dMonth === 1) {
            return 'January'
        } else if (post.dMonth === 2) {
            return 'February'
        } else if (post.dMonth === 3) {
            return 'March'
        } else if (post.dMonth === 4) {
            return 'April'
        } else if (post.dMonth === 5) {
            return 'May'
        } else if (post.dMonth === 6) {
            return 'June'
        } else if (post.dMonth === 7) {
            return 'July'
        } else if (post.dMonth === 8) {
            return 'August'
        } else if (post.dMonth === 9) {
            return 'September'
        } else if (post.dMonth === 10) {
            return 'October'
        } else if (post.dMonth === 11) {
            return 'November'
        } else if (post.dMonth === 12) {
            return 'December'
        } else {
            return post.dMonth
        }
    }

    return (
        <div className='mb-60 max-lg:mb-20 post_image'>
            <div key={post.id} className='bg-white px-40 max-md:px-20 max-sm:px-4 max-h-fit place-content-end w-full flex flex-col rounded-xl container mx-auto'>
                <div className={post.thirdParagraph !== '' ? 'flex flex-row items-bottom gap-20 bg-white text-xl font-light max-lg:flex-col max-lg:gap-10' : 'flex flex-col self-center gap-10 bg-white text-xl font-light w_400 max-lg:flex-col max-lg:gap-10'}>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <h1 className='text-6xl text-gray-500 max-md:text-4xl'>{post.title}</h1>
                            <p className='text-xl text-indigo-500 mt-4'>{date(post.dMonth)} {post.dDate}, {post.dYear}</p>
                        </div>
                        <p className='break-words object-contain text-gray-500'>{post.firstParagraph}</p>
                    </div>
                    <div className='flex flex-col justify-end gap-10'>
                        <p className='break-words object-contain text-gray-500'>{post.secondParagraph}</p>
                        {post.thirdParagraph !== '' ? (
                            <>
                                <p className='break-words object-contain text-gray-500'>{post.thirdParagraph}</p>
                            </>
                        ) : ''}
                    </div>
                </div>
                {currentUser && (
                    <div className='self-end mt-4 flex gap-4'>
                        <BsFillTrash3Fill onClick={() => setDeletePopup(true)} className='text-red-500 text-2xl cursor-pointer' />
                        {deletePopup && (
                            <div className='fixed inset-0 flex items-center justify-center'>
                                <div className="fixed bg-gray-500 bg-opacity-75 transition-opacity inset-0" onClick={() => setDeletePopup(false)} />

                                <div className=' w-96 h-96 p-10 bg-white shadow flex flex-col items-center justify-center gap-10 z-50 rounded-lg relative m-4 max-md:h-auto'>
                                    <div onClick={() => setDeletePopup(false)} className="text-gray-200 text-xl w-8 h-8 rounded-full hover:bg-gray-50 cursor-pointer flex items-center justify-center absolute right-4 top-4">X</div>

                                    <h3 className='text-indigo-500 text-xl font-bold text-center'>Are you sure you want to delete?</h3>
                                    <div className='flex gap-4 w-full'>
                                        <button onClick={() => setDeletePopup(false)} className='text-gray-500 border border-3 rounded border-gray-400 p-3 w-full mt-6 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white flex-1'>No</button>
                                        <button onClick={() => handleDelete(post.id)} className='self-center hover:bg-indigo-600 border border-3 rounded p-3 w-full mt-6 border-indigo-500 bg-indigo-500 text-white font-bold flex-1'>Yes</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Link to={'/create/' + post.id}>
                            <GrEdit className='text-red-500 text-2xl cursor-pointer' />
                        </Link>
                    </div>
                )}
            </div>
            {post.imgUrl && <img src={post.imgUrl} alt={post.title} className='mt-20 max-h-96 object-cover w-2/4 self-end max-md:w-full' />}
        </div>
    )
}

export default Post
