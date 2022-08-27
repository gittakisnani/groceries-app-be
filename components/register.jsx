import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { GiCheckMark } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { GetAuth } from '../context/AuthContext'
import axios from './api/axios'

const RegisterPage = () => {
    const router = useRouter();
    const { setAuth } = GetAuth();
    const errorRef = useRef()

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [agree, setAgree] = useState(false);
    const [err, setError] = useState(false);
    const [errMsg, setErrMsg] = useState('')

    const handleAgree = () => setAgree(!agree);

    const handleSubmit = async (e) => {
        //Write Backend Code here
        e.preventDefault();
        if(!agree)  {
            setError(true)
            setErrMsg('You Must agree the Terms and Conditions to Finish registration')
        };


        if(!username || !fullName || !email || !pwd) {
            setError(true);
            setErrMsg('All Fields are required');
            return;
        }

        try {
            const response = await axios.post('/register', 
            JSON.stringify({ user: username, pwd}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            }
            );
            setAuth({ username, fullName })
        } catch(err) {
            setError(true)
            if(!err?.response) {
                setErrMsg('No Server Response')
            } else if (err?.response?.status === 409) {
                setErrMsg('Username taken')
            } else {
                setErrMsg('Registration Failed')
            }

        }
    }

    useEffect(() => {
        setError(false);
        setErrMsg('')
    }, [username, pwd, email, fullName])


    const handleAuth = () => router.push('/')
  return (
    <div className='flex w-full h-full bg-[#eee] max-w-[900px] '>
        <div className='bg-[#fab529] p-2 hidden md:flex items-center justify-center text-center text-white min-h-full'>
            <h2 className='text-xl w-[70%]'>Welcome To Taki Snani Food App</h2>
        </div>
        <div className='px-10 py-4 flex-1 flex flex-col'>
        <div className='border-b border-[#d1d1d1] flex items-center justify-between pb-2'>
            <span><Logo /></span>
            <span className='text-gray-500 translate-y-2 text-sm'>Already have an account? <Link href={'/login'}><a className='underline text-inherit'>Login</a></Link></span>
        </div>
        <div className='text text-slate-700 py-4'>
            <h3 className='text-5xl font-semibold'>Register For Free <br /> <p className='text-2xl tracking-wider text-gray-500 font-normal py-2'>and Enjoy your favorite groceries</p></h3>
        </div>
            <form 
            onSubmit={handleSubmit}
            className='registration-form grid grid-cols-1 md:grid-cols-2 gap-3 py-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username">Username</label>
                    <input
                        id='username' 
                        autoComplete='off'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type="text" 
                        className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' 
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        id='fullname' 
                        autoComplete='off'
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        type="text" 
                        className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' 
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email' 
                        autoComplete='off'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" 
                        className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' 
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="pwd">Password</label>
                    <input
                        id='pwd' 
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                        type="password" 
                        className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' 
                    />
                </div>

                <div className='flex items-center gap-2 py-2 md:col-span-2'>
                    <span 
                    onClick={handleAgree}
                    style={{backgroundColor: agree ? '#fab529' : ''}}
                    className='border border-[#fab529] cursor-pointer flex items-center justify-center text-white h-5 w-5 text-xl'>{agree && <GiCheckMark />}</span>
                    <p className='txt-sm'>By registering I agree with <span className='text-blue-600 hover:underline cursor-pointer'>Terms & Conditions</span></p>
                </div>

                {err && errMsg && <p ref={errorRef} aria-live='assertive' className='errMsg bg-red-300 p-1 md:col-span-2'>{errMsg}</p>}

                <button 
                disabled={!agree}
                className='px-4 py-2 md:col-span-2 text-white bg-[#fab529] disabled:cursor-not-allowed disabled:bg-[#d1d1d1]'>Register</button>
                <div className='md:col-span-2 text-center'>OR</div>
                <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-1 text-white'>
                    <button onClick={handleAuth} className='w-full flex items-center justify-center gap-2 border border-[#d1d1d1] p-2 text-slate-600'>
                        <span className='text-lg'><FcGoogle /></span>
                        Register with GOOGLE
                    </button>
                    <button onClick={handleAuth} className='w-full flex items-center justify-center gap-2 border border-[#d1d1d1] p-2 bg-[#2f3744]'>
                        <span className='text-lg'><AiFillGithub /></span>
                        Register with GITHUB
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage