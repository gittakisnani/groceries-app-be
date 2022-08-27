import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { GiCheckMark } from 'react-icons/gi'
import { GetAuth } from '../context/AuthContext';
import { useRouter } from 'next/dist/client/router';
import axios from './api/axios';
const LoginPage = () => {
    const router = useRouter()

    const { auth, setAuth } = GetAuth()
    const errRef = useRef()

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [err, setErr] = useState(false);

    const [remember, setRemember] = useState(false);

    const handleRemember = () => setRemember(!remember)


    const handleSubmit = async e => {
        e.preventDefault();
        if(!username || !pwd ) {
            setErr(true);
            setErrMsg('Username and password are required');
            errRef?.current?.focus()
            return
        }

        try {
            const response = await axios.post('/auth', 
            JSON.stringify({ username, password: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
            )


            const { roles, bag, liked, _id } = response?.data

            setAuth({ username, roles, bag, liked, _id })
            setPwd('')
            setUsername('')
            router.push('/')
        } catch(err) {
            setErr(true);
            if(!err?.response) {
                setErrMsg('No server response')
            } else if (err?.response?.status === 400 ) {
                setErrMsg('Missing username or password')
            } else if (err?.response?.status === 401 && err?.response?.data.message === 'User not found' ) {
                setErrMsg('User not found')
            } else if (err?.response?.status === 401 && err?.response?.data.message === 'Password incorrect' ) {
                setErrMsg('Password incorrect')
            } else {
                setErrMsg('Login Failed')
            }
        }

        //Set auth and push router to home page
    } 
    
    useEffect(() => {
        setErr(false);
        setErrMsg('')
    }, [username, pwd])

  return (
    <div className='w-full max-w-[500px] p-4 bg-[#eee]'>
        <h3 className='my-2 text-4xl font-semibold text-slate-700'>Login</h3>

        {err && errMsg && <p ref={errRef} aria-live='assertive' className='w-full p-2 my-2 bg-red-300'>{errMsg}</p>}
        <form 
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
            <label htmlFor="username">Username:</label>
            <input
            autoComplete='off'
            id='username' 
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text" 
            className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' />
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="pwd">Password:</label>
            <input 
            id='pwd'
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            type="password" 
            className='px-4 py-2 border border-[#d1d1d1] hover:border-[#fab529] focus:border-[#fab529] transition-all duration-300 ease-in-out' />
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                <span 
                    onClick={handleRemember}
                    style={{backgroundColor: remember ? '#fab529' : ''}}
                    className='border border-[#fab529] cursor-pointer flex items-center justify-center text-white h-5 w-5 text-xl'>{remember && <GiCheckMark />}</span>
                <p className='text-sm font-semibold'>Remember me</p>
                </div>
                <Link href='/register'><a className='underline text-sm'>Forgot password?</a></Link>
            </div>

            <button 
            className='px-4 py-2 md:col-span-2 text-white bg-[#fab529]'>
            Login
            </button>

            <p className='w-full text-center'>OR</p>

            <button className='w-full flex items-center justify-center gap-2 border border-[#d1d1d1] p-2 text-slate-600'>
                <span className='text-lg'><FcGoogle /></span>
                Login with GOOGLE
            </button>
            <button className='w-full flex items-center justify-center gap-2 border border-[#d1d1d1] p-2 bg-[#2f3744] text-white'>
                <span className='text-lg'><AiFillGithub /></span>
                Login with GITHUB
            </button>
            <p className='register'>Not registered yet? <Link href='/register'><a className='text-slate-900 underline font-medium'>Create an account.</a></Link></p>
        </form>
    </div>
  )
}

export default LoginPage