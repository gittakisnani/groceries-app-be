import React from 'react'
import Container from '../components/Container' 
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import data from "../data/data"
import { GetAuth } from '../context/AuthContext';
const Liked = () => {
    const { products } = data
    const { liked } = GetAuth().auth;
    console.log(liked)
    console.log(products)
  return (
    <>
        <Head>
        <title>Groceries App | My Liked Items</title>
        <meta name="description" content="Liked Items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container>
            <div className='w-full bg-white'>
                <p className='py-10'>Liked Products: {liked.length} Item{liked.length === 1 ? '': 's'}</p>
                <ul className='list-none flex flex-col gap-2 w-full'>
                {liked.map(id => {
                    const productMatch = products.find(({ productId }) => productId.toString() === id);
                    if(productMatch) return (
                        <li key={id} className='border border-transparent duration-200 flex items-center justify-between hover:border-gray-200 p-2'>
                            <div className='product-image h-[100px] rounded-md overflow-hidden'>
                                <Image src={productMatch.mainImg} alt={productMatch.name} height={100} width={100} />
                            </div>
                            <Link href={`/categories/${productMatch.cat}/${productMatch.productId}`}><span className='flex-1 px-4'>{productMatch.name}</span></Link>
                            <span>Unit Price: ${productMatch.price.toFixed(2)}</span>
                        </li>)
                        
                    
                })}
                </ul>
            </div>
        </Container>
    </>
  )
}

Liked.getLayout = (page, products, categories) => (<Layout products={products} cats={categories}>{page}</Layout>)

export default Liked