import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

const Post = ({ post, handleDelete }) => {
    const { currentUser } = useContext(AuthContext)

    const date = () => {
        if (post.dMonth === 1) {
            return 'januari'
        } else if (post.dMonth === 2) {
            return 'februari'
        } else if (post.dMonth === 3) {
            return 'mars'
        } else if (post.dMonth === 4) {
            return 'april'
        } else if (post.dMonth === 5) {
            return 'maj'
        } else if (post.dMonth === 6) {
            return 'juni'
        } else if (post.dMonth === 7) {
            return 'juli'
        } else if (post.dMonth === 8) {
            return 'augusti'
        } else if (post.dMonth === 9) {
            return 'september'
        } else if (post.dMonth === 10) {
            return 'oktober'
        } else if (post.dMonth === 11) {
            return 'november'
        } else if (post.dMonth === 12) {
            return 'december'
        } else {
            return post.dMonth
        }
    }

    return (
        <div className='mb-60 flex flex-col'>
            <div key={post.id} className='bg-white px-40 max-h-fit place-content-end w-full flex flex-col rounded-xl container mx-auto'>
                <div className='flex flex-row items-bottom gap-20 bg-white text-xl font-light'>
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className='text-6xl text-gray-500'>{post.title}</h1>
                            <p className='text-xl text-indigo-500'>{post.dDate} {date(post.dMonth)}, {post.dYear}</p>
                        </div>
                        <p className='break-words object-contain text-gray-500'>{post.firstParagraph}</p>
                    </div>
                    <div className='flex flex-col justify-end gap-10'>
                        <p className='break-words object-contain text-gray-500'>{post.secondParagraph}</p>
                        <p className='break-words object-contain text-gray-500'>{post.thirdParagraph}</p>
                    </div>
                </div>
                {currentUser && (
                    <div className='self-end mt-4 flex gap-4'>
                        <BsFillTrash3Fill onClick={() => handleDelete(post.id)} className='text-red-500 text-2xl cursor-pointer' />
                        <Link to={'/create/' + post.id}>
                            <GrEdit className='text-red-500 text-2xl cursor-pointer' />
                        </Link>
                    </div>
                )}
            </div>
            {post.imgUrl && <img src={post.imgUrl} alt={post.title} className='mt-10 max-h-80 object-cover w-2/4 [&>*:nth-child(odd)]:self-end [&>*:nth-child(even)]:self-start' />}
        </div>
    )
}

export default Post