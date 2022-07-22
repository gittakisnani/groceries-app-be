import React from 'react'
import Container from '../components/Container' 
import Link from 'next/link';
import Head from 'next/head';
const Bag = ({ dataJson, personalJson}) => {
    const { categories, products } = dataJson;
    const { myBag } = personalJson;
    const bagSet = [...new Set(myBag)];
    const count = bagSet.map(id => {
        const matchLength = myBag.filter(matchId => matchId === id).length;
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
                <p className='py-10'>Added to Bag Products: {myBag.length} Item{myBag.length === 1 ? '': 's'}</p>
                <ul className='list-none flex flex-col gap-2 w-full'>
                {count.map(([id, count]) => {
                    const productMatch = products.find(({productId}) => productId === id);
                    return (<li key={id} className='border border-transparent duration-200 flex items-center justify-between hover:border-gray-200 p-2'>
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

export async function getStaticProps() {
    try {
        const dataResponse = await fetch('http://localhost:3000/api/db/data');
        if(!dataResponse.ok) throw new Error('Products Not Found! Please try again');
        const personalResponse = await fetch('http://localhost:3000/api/db/personal')
        if(!personalResponse.ok) throw new Error('Try Later!')
        const dataJson = await dataResponse.json();
        const personalJson = await personalResponse.json();
        return {
            props: {
                error: false,
                dataJson,
                personalJson
            }
        }
    } catch(err) {
        console.error(err);
        return {
            props: {
                error: true,
                errMsg: err.message,
                dataJson: null,
                personalJson: null
            }
        }
    }
}

export default Bag