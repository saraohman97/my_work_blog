import React, { useEffect, useState } from 'react'
import AdminImg from '../images/undraw_hero.svg'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import { db, storage } from '../firebase'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const date = new Date()
    const [error, setError] = useState(false)
    const [form, setForm] = useState({
        title: "",
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        dDate: date.getDate(),
        dMonth: date.getMonth(),
        dYear: date.getFullYear(),
    })

    //Upload file to storage
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_change", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done.");
                setProgress(progress)
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.log(error)
            },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    })
                })
        }
        file && uploadFile();
    }, [file])


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.title === '' || form.firstParagraph === '') {
            setError(true)
            return
        } else {
            setError(false)
        }
        try {
            await addDoc(collection(db, 'posts'), {
                ...form,
                timestamp: serverTimestamp(),
            })
            // setForm({
            //     title: "",
            //     firstParagraph: "",
            //     secondParagraph: "",
            //     thirdParagraph: ""
            // })

            //Reload page just for clean file input...
            // window.location.reload(false);
            navigate('/')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className='relative'>
                <img src={AdminImg} className='absolute top-44 right-0' alt="" />
                <div className="container mx-auto mb-20">
                    {/* form */}
                    <form onSubmit={handleSubmit} className='mx-36 py-14 px-20 bg-gray-100 rounded-2xl opacity-80 flex flex-col items-center'>
                        <h3 className='self-start text-indigo-500 font-bold text-xl mb-4'>Create a post</h3>
                        <div className='flex flex-wrap w-full gap-10'>

                            <div className="flex flex-col gap-10 flex-1">
                                <div className='flex flex-col gap-1'>
                                    <textarea
                                        value={form.title}
                                        name='title'
                                        onChange={handleChange}
                                        type="text"
                                        className='bg-white rounded p-4 h-60 text-4xl w-full'
                                        placeholder='My heading here'
                                    />
                                </div>
                                <div className='flex flex-col flex-1 gap-1 w-full'>
                                    <textarea
                                        value={form.firstParagraph}
                                        name='firstParagraph'
                                        onChange={handleChange}
                                        type="text" className='bg-white rounded p-4 h-60'
                                        placeholder='First paragraph'
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-10 flex-1">
                                <div className='flex flex-col flex-1 gap-1 w-full'>
                                    <textarea
                                        name='secondParagraph'
                                        value={form.secondParagraph}
                                        onChange={handleChange}
                                        type="text" className='bg-white rounded p-4 h-60'
                                        placeholder='Second paragraph'
                                    />
                                </div>
                                <div className='flex flex-col flex-1 gap-1 w-full'>
                                    <textarea
                                        name='thirdParagraph'
                                        value={form.thirdParagraph}
                                        onChange={handleChange}
                                        type="text" className='bg-white rounded p-4 h-60'
                                        placeholder='Third paragraph'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="file">Image</label>
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    className='bg-white rounded p-4 h-36'
                                />
                            </div>
                        </div>

                        {error && <span className='text-red-500 mt-4'>Post must contain a title and a first paragraph.</span>}
                        <button className='hover:text-gray-500 hover:bg-white border border-3 rounded hover:border-gray-400 p-3 w-60 mt-6 border-indigo-500 bg-indigo-500 text-white'>Post</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost