import React from 'react'
import { GetAuth } from '../context/AuthContext'
import LoginPage from '../components/Login'
import Head from 'next/head'
const Login = () => {
  return (
    <>
      <Head>
        <title>Groceries App | Login</title>
        <meta name="description" content="Login to our groceries app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='w-full h-full grid place-items-center'>
      <LoginPage />
    </div>
    </>
  )
}

export default Login