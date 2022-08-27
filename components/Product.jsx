import React, { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { AiOutlineStar, AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { GetAuth } from '../context/AuthContext'
import axios from './api/axios'
//When we click the liked button we update the db and call getPersonal
const Product = ( { product } ) => {
    //Expect a save
    const [qnt, setQnt] = useState(0);
    const { auth, setAuth } = GetAuth()
    const { liked } = auth;

    const handleLike = async (productId) => {
        try {
            const response = await axios.post('/users/likes', {
                userId: auth._id,
                productId
            })

            setAuth({ ...auth, liked: response?.data?.length ?  response?.data : [...auth.liked, productId] })


        } catch(err)  {
            console.error(err);
        }
    }


    const handleAddToBag = async (productId) => {
        if(!qnt) return;
        try {
            const response = await axios.post('/users/bag', {
                userId: auth._id,
                productId
            })

            setAuth({ ...auth, bag: response?.data?.length ? response.data : [...auth.bag, productId ] })

            setQnt(0)
        } catch(err)  {
            console.error(err);
        }
    }


    const spanWidth = product.sold / product.all * 100;
    const handleIncrement = () => setQnt(qnt + 1)
    const handleDecrement = () => setQnt(qnt === 0 ? qnt : qnt - 1);
    
    const getRate = (ratingObj) =>  {
        return Object.entries(ratingObj).reduce(([rate, reviews], [currentRate, currentReviews]) => currentReviews > reviews ? [currentRate, currentReviews] : [rate, reviews]
        );
    }

    const createRate = maxRate => {
        const rating = [];
        for(let i = 0; i < 5; i++) {
            rating.push(i < maxRate ? <AiFillStar color='#fab529' /> : <AiOutlineStar color='#fab529' />) 
        }
        return rating;
    }
    return (
        <div className='cursor-pointer max-w-full flex-1 p-4 duration-300 ease-in-out border border-transparent hover:border-gray-400 relative group'>
                <Link href={`/categories/${product.cat}/${product.productId}`}>
                    <button className='bg-gray-100 opacity-0 duration-300 ease-out p-2 rounded-md group-hover:opacity-100 flex justify-center items-center text-black'>View Product</button>
                </Link>
                <div className='product-image py-2 w-full flex justify-center items-center'>
                    <Image src={product.mainImg} alt={'Product'} height={120} width={120} />
                </div>
                <h6 className='text-base'>{product.name}</h6>
                <p className='text-sm text-blue-400 font-semibold'>{product.desc.slice(0, 25)}...</p>
                <div className='rate flex py-2 gap-1 items-center'>
                {createRate(getRate(product.rating)[0])}
                {getRate(product.rating)[1]}
                </div>
                <div className='price text-lg font-semibold'>${product.price.toFixed(2)}</div>
                <div className='Stock'>
                    <div className='w-full range-wrapper relative bg-gray-200 p-1 my-2 flex flex-col'>
                        <span className='absolute left-0 top-0 bottom-0 bg-[#fab529]'
                        style={{width: spanWidth + '%'}}
                        ></span>
                    </div>
                        <p className='text-sm'>{product.sold}/{product.all}</p>
                </div>
                <div className='add-to-cart'>
                    <div className='flex flex-wrap items-center gap-4'>
                        <div className='grid grid-cols-3 border border-gray-300 rounded-sm my-2'>
                            <button 
                            onClick={handleDecrement}
                            className='decrement py-1 px-2'><AiOutlineMinus /></button>
                            <span className='qnt flex items-center justify-center py-1 px-2 font-semibold'>{qnt}</span>
                            <button 
                            onClick={handleIncrement}
                            className='increment py-1 px-2'><AiOutlinePlus /></button>
                        </div>
                        <p className='total-amoun'>Total: <span className='text-green-600'>${Number(49.99 * qnt).toFixed(2)}</span></p>
                        <div className='add-to-cart w-full'>
                            <button 
                            disabled={!qnt}
                            onClick={() => handleAddToBag(product.productId.toString())}
                            className='disabled:bg-[#d1d1d1] w-full rounded-md p-3 bg-[#fab529]/90 hover:bg-[#fab529]'>Add to cart</button>
                        </div>
                    </div>
                </div>
                {!liked.includes(product.productId.toString()) && 
                <button 
                onClick={() => handleLike(product.productId.toString())}
                className='absolute hidden group-hover:block top-4 right-4 bg-transparent text-2xl'>
                     <AiOutlineHeart color='#fab529' />
                </button>
                }

                {liked.includes(product.productId.toString()) && 
                <button 
                onClick={() => handleLike(product.productId.toString())}
                className='absolute hidden group-hover:block top-4 right-4 bg-transparent text-2xl'>
                     <AiFillHeart color='#fab529' />
                </button>
                }
            </div>
    )
}

export default Product