import React from 'react'
import Container from '../components/Container' 
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import data from '../data/data'
import { GetAuth } from '../context/AuthContext';
const Bag = () => {
    const { products } = data;
    const { bag } = GetAuth().auth
    const bagSet = [...new Set(bag)];
    const count = bagSet.map(id => {
        const matchLength = bag.filter(matchId => matchId === id).length;
        return [id, matchLength]
    })
  return (
    <>
        <Head>
        <title>Groceries App | My Bag</title>
        <meta name="description" content="My Added to bag products appear here." />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <div className='w-full bg-white'>
                <p className='py-10'>Added to Bag Products: {bag.length} Item{bag.length === 1 ? '': 's'}</p>
                <ul className='list-none flex flex-col gap-2 w-full'>
                {count.map(([id, count]) => {
                    const productMatch = products.find(({productId}) => productId.toString() === id);
                    if(productMatch) return (<li key={id} className='border border-transparent duration-200 flex items-center justify-between hover:border-gray-200 p-2'>
                            <Link href={`/categories/${productMatch.cat}/${productMatch.productId}`}><span>{productMatch.name}</span></Link>
                            <span>Unit Price: ${productMatch.price.toFixed(2)}</span>
                            <span>{count} Item(s) added to bag</span>
                            <span>All: ${(count * productMatch.price).toFixed(2)}</span>
                        </li>)
                        
                    
                })}
                </ul>
            </div>
        </Container>
    </>
  )
}
Bag.getLayout = (page, products, categories) => (<Layout products={products} cats={categories}>{page}</Layout>)
export default Bag