import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import Post from '../components/Post';

const PostList = ({sQuery}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    //read posts
    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, 'posts'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let postsArr = []
            querySnapshot.forEach((doc) => {
                postsArr.push({ ...doc.data(), id: doc.id })
            })
            setPosts(postsArr)
            return () => unsubscribe()
        })
        setLoading(false)
    }, [])

    // delete post
    const handleDelete = async (id) => {
        try {
            setLoading(true)
            await deleteDoc(doc(db, 'posts', id));
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {!posts && <p>No posts</p>}
            {posts && posts
                .filter((post) => post.title.toLowerCase().includes(sQuery))
                .map(post => (
                    <Post key={post.id} post={post} handleDelete={handleDelete} />
                ))}
        </>
    )
}

export default PostList