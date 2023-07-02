import React, { useContext, useState } from 'react'
import LoginImg from '../images/undraw_login.svg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase'

const Login = ({ setOpenLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const data = userCredential.user;
                dispatch({ type: "LOGIN", payload: data })
                navigate('/create')
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <div className='relative z-10 transition-all' aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 overflow-y-auto">
                <div className="fixed bg-gray-500 bg-opacity-75 transition-opacity inset-0" onClick={() => setOpenLogin(false)} />

                <div className="flex min-h-full justify-center p-4 text-center items-center">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-4xl flex py-14 px-20 max-sm:px-4 justify-between">
                        {/* Popup content */}
                        <div onClick={() => setOpenLogin(false)} className="text-gray-200 text-xl absolute right-10 max-sm:right-4 top-7 w-8 h-8 rounded-full hover:bg-gray-50 cursor-pointer flex items-center justify-center">X</div>
                        <form onSubmit={handleSubmit} className="flex flex-col justify-between">
                            <h3 className="text-indigo-500 text-xl font-bold">Login</h3>
                            <p className="text-gray-400">Only people with access to this blog is allowed in.</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="bg-gray-100 p-4 rounded text-center max-sm:mb-4" />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-gray-100 p-4 rounded text-center" />
                            {error && <p style={{ color: 'red' }}>Wrong email or password</p>}
                            <button className='self-center hover:bg-white hover:text-gray-400 border border-3 rounded hover:border-gray-400 p-3 w-60 mt-6 border-indigo-500 bg-indigo-500 text-white font-bold'>Login</button>
                        </form>
                        <img
                            src={LoginImg}
                            className='max-sm:hidden'
                            alt='Undraw login'
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

