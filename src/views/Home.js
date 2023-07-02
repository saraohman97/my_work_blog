import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, doc, deleteDoc } from '@firebase/firestore'
import { db } from '../firebase'

import Header from '../components/Header'
import Login from '../components/Login'
import Post from '../components/Post'

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false)
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

  // edit post
  // const getPostDetail = async () => {
  //     const docRef = doc(db, "posts", post.id);
  //     const snapshot = await getDoc(docRef);
  //     if (snapshot.exists()) {
  //         setForm({ ...snapshot.data() });
  //     }
  // }
  // getPostDetail()


  return (
    <div>
      <Header setOpenLogin={setOpenLogin} />

      {openLogin && (
        <Login setOpenLogin={setOpenLogin} />
      )}

      {loading && <p>Loading...</p>}
      {!posts && <p>No posts</p>}
      {posts?.map(post => (
        <Post key={post.id} post={post} handleDelete={handleDelete} />
      ))}

    </div>
  )
}

export default Home