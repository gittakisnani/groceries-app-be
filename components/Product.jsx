import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import { AiOutlineStar, AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import personal from '../data/personal'

//When we click the liked button we update the db and call getPersonal
const Product = ( { product } ) => {
    //Expect a save
    const [qnt, setQnt] = useState(0);
    const [liked, setLiked] = useState([]);
    const [bag, setBag] = useState([]);
    const [personal, setPersonal] = useState({})

    const getPersonal = async () => {
        setPersonal(personal)
        setLiked(personal.myLiked || []);
        setBag(personal.myBag || [])
        return personal;
    }

    useEffect(() => {
        getPersonal()
    }, [])


    const handleLike = async (productId) => {
        //add to db, call getPersonal
        getPersonal();
        const isLiked = liked.includes(productId);
        // const newArr = isLiked ? liked.filter(id => id !== productId) : [...liked, productId]
        // const response = await fetch('http://localhost:3000/api/db/personal', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ ...personal, myLiked: newArr})
        // });

        // if(!response.ok) throw new Error('Server Error');
        // const data = await response.json();
        // return data
    }


    const handleAddToBag = async (productId) => {
        if(!qnt) return;
        getPersonal();
        // const newArr = [...bag, ...Array(qnt).fill(productId)]
        // const response = await fetch('http://localhost:3000/api/db/personal', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ ...personal, myBag: newArr })
        // });

        // if(!response.ok) throw new Error('Server Error');
        // const data = await response.json();
        setQnt(0)
        // return data
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
                            onClick={() => handleAddToBag(product.productId)}
                            className='disabled:bg-[#d1d1d1] w-full rounded-md p-3 bg-[#fab529]/90 hover:bg-[#fab529]'>Add to cart</button>
                        </div>
                    </div>
                </div>
                {!liked.includes(product.productId) && 
                <button 
                onClick={() => handleLike(product.productId)}
                className='absolute hidden group-hover:block top-4 right-4 bg-transparent text-2xl'>
                     <AiOutlineHeart color='#fab529' />
                </button>
                }

                {liked.includes(product.productId) && 
                <button 
                onClick={() => handleLike(product.productId)}
                className='absolute hidden group-hover:block top-4 right-4 bg-transparent text-2xl'>
                     <AiFillHeart color='#fab529' />
                </button>
                }
            </div>
    )
}

export default Product