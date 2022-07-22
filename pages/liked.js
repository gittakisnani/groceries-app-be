import React from 'react'
import Container from '../components/Container' 
import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head';

const Bag = ({ dataJson, personalJson}) => {
    const { categories, products } = dataJson;
    const { myLiked } = personalJson;
  return (
    <>
        <Head>
        <title>Groceries App | My Liked Items</title>
        <meta name="description" content="Liked Items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container>
            <div className='w-full bg-white'>
                <p className='py-10'>Liked Products: {myLiked.length} Item{myLiked.length === 1 ? '': 's'}</p>
                <ul className='list-none flex flex-col gap-2 w-full'>
                {myLiked.map(id => {
                    const productMatch = products.find(({productId}) => productId === id);
                    return (
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