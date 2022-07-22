import React from 'react'
import Link from 'next/link'
import Category from '../../components/Category'
import Container from '../../components/Container'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Categories = ({ dataJson, error, errMsg }) => {
  const router = useRouter();
  const cats = dataJson?.categories;
  const handleRefresh = () => router.reload();
  const handleBack = () => router.replace('/');
  return (
    <>
      <Head>
        <title>Groceries App | Categories</title>
        <meta name="description" content="All Groceries categories are available here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className='py-10'>
        {
          cats && 
            <>
              <Link href={'/categories/all'}>
                  <a className='font-semibold hover:underline decoration-none'>All Categories:</a>
              </Link>
              <div className='flex items-center justify-between gap-3  py-8 w-full'>
                  {cats.map(cat => (
                      <Link key={cat.catId} href={`/categories/${encodeURI(cat)}`}>
                          <Category cat={cat.cat} />
                      </Link>
                  ))}
              </div>
            </>
        }
        {
          !cats && error && errMsg && 
          <>
            <p className='m-auto text-2xl w-full text-center'>
              {errMsg}
            </p> 
            <div className='mx-auto my-10 flex items-center justify-center gap-10'>
              <button
              onClick={handleRefresh} 
              className='bg-[#fab529] hover:bg-[#e6a628] p-2 px-10'>
              Refresh
              </button>
              <button
              onClick={handleBack} 
              className='bg-[#fab529] hover:bg-[#e6a628] p-2 px-10'>
              Back to home
              </button>
            </div>
          </>
        }
        </div>
      </Container>
    </>
  )
  
}

export async function getStaticProps() {
  try{
    const response = await fetch('http://localhost:3000/api/db/data');
    if(!response.ok) throw Error('Something Went wrong! please refresh the page or try later.')
    const dataJson = await response.json();
    return {
        props: {
          error: false,
          dataJson
        }
    }
  } catch(err) {
    return {
        props: {
          error: true,
          errMsg: 'Something Went wrong! please refresh the page or try later.',
          dataJson
        }
    }
  }
}


export default Categories