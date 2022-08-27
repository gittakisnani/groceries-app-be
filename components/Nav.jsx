import React, { useState } from 'react'
import Logo from './Logo'
import { CgClose } from 'react-icons/cg';
import { RiUserLine } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link';
import { useRouter } from 'next/router';


const Nav = ({nav, handleNav, cats=[], products=[]}) => {
    const router = useRouter()
    const [category, setCategory] = useState('All');
    const [productText, setProductText] = useState('');
    const [matchProducts, setMatchProducts]= useState([])

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const fetchSearchData = (category, text) => {
        setMatchProducts(products.filter(product => category === 'All' ? product.name.includes(text) : product.cat === category && product.name.includes(text)))
    }

    const handleFetchData = e => {
        e.preventDefault();
        fetchSearchData(category, productText)
    }

    const handleInputChange = e => {
        setProductText(e.target.value)
        fetchSearchData(category, e.target.value)
    }


  return (
    <div 
    className='md:hidden bg-gray-100 z-[20] p-5 fixed top-0 bottom-0 w-[70%] sm:w-[80%] ease-in transition-all duration-300'
    style={{left: nav ? '0' : '-100%'}}
    >
        <div className='h-full w-full flex flex-col relative'>
            <Logo />
            <div className='mt-4 w-full bg-gray-200 shadow-xl shadow-gray-100 hover:shadow-gray-300 rounded-lg'>
                <form 
                className='w-full'
                onSubmit={handleFetchData}
                >
                    <input 
                        value={productText}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder='Search here...' 
                        className='p-3'
                    />
                </form>
            </div>
            <div className='my-4 w-full bg-gray-200 relative'>
                <select 
                className='p-2 border-r outline-none bg-inherit w-full'
                onChange={handleChange}
                >
                <option value="All">All</option>
                {cats.map(cat => (
                    <option key={cat.catId} value={cat.cat}>{cat.cat}</option>
                ))}
                </select>
                {productText && <div className='results absolute top-[100%] left-0 p-4 bg-gray-200 my-1 rounded-xl w-full'>
                {!matchProducts.length && <p className='text-center'>No results</p>}
                {matchProducts && 
                <ul className='listed-searched-products flex flex-col gap-2'>
                    {matchProducts.map(product => (
                        <Link key={product.productId} href={`/categories/${product.cat}/${product.productId}`}>
                            <li onClick={() => setProductText('')} className='w-full flex items-center justify-between hover:underline'>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
                }
            </div>}
            </div>
            <ul className='list-none flex flex-col py-4 flex-1 justify-center w-full'>
                    <li onClick={() => router.push('/')} className='w-full py-2 px-4 flex items-center gap-4 cursor-pointer border-b hover:bg-gray-200 ease-in duration-300 my-2'>
                            <RiUserLine />
                            <p className='uppercase'>My Profile</p>
                    </li>
                    <li onClick={() => router.push('/liked')} className='w-full py-2 px-4 flex items-center gap-4 cursor-pointer border-b hover:bg-gray-200 ease-in duration-300 my-2'>
                        <AiOutlineHeart />
                        <p className='uppercase'>Liked Items</p>
                    </li>
                    <li onClick={() => router.push('/bag')} className='w-full py-2 px-4 flex items-center gap-4 cursor-pointer border-b hover:bg-gray-200 ease-in duration-300 my-2'>
                        <AiOutlineShoppingCart />
                        <p className='uppercase'>Shopping Cart</p>
                    </li>
            </ul>
                <div className='absolute bottom-0 right-0 left-0 p-2 bg-gray-200 flex items-center justify-between'>
                    <h6 className=''>8 800 332 65-66</h6>
                    <span className='text-gray-800 flex items-center justify-end'>Support 24/7</span>
                </div>
            <button 
            onClick={handleNav}
            className='absolute p-4 rounded-[50%] bg-gray-200 text-xl right-0 top-0 hover:shadow-xl hover:shadow-gray-300'>
                <CgClose />
            </button>
        </div>
    </div>
  )
}

export default Nav