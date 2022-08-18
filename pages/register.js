import Head from 'next/head'
import React from 'react'
import RegisterPage from '../components/register'
const Register = () => {
  return (
    <>
      <Head>
        <title>Welcome to TakiFood</title>
        <meta name="description" content="Registration page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full min-h-full flex justify-center items-center register'>
        <RegisterPage />
      </div>
    </>
  )
}

export default Register