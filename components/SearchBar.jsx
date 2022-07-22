import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchBar = ({ cats=[] }) => {
    const [category, setCategory] = useState('All');
    const [productText, setProductText] = useState('');
    const [matchProducts, setMatchProducts]= useState([])

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    const fetchSearchData = async(category, text) => {
        try{
            const response = await fetch('http://localhost:3000/api/db/data');
            const dataJson = await response.json();
            setMatchProducts(dataJson.products.filter(product => category === 'All' ? product.name.includes(text) : product.cat === category && product.name.includes(text)))
        } catch(err) {
            console.error(err)
        }
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
        <div className='flex flex-1 items-center flex-warp justify-center'>
           <div className='relative w-[90%]'>
           <div className='bg-gray-100 flex items-center rounded-xl relative group shadow-lg shadow-transparent overflow-hidden'>
                <select 
                onChange={handleChange}
                className='p-2 border-r border-gray-400 outline-none bg-inherit'>
                    <option value="All">All</option>
                    {cats.map(cat => (
                        <option key={cat.catId} value={cat.cat}>{cat.cat}</option>
                    ))}
                </select>
                <form
                onSubmit={handleFetchData}
                className='flex-1'>
                    <input 
                    value={productText}
                    onChange={handleInputChange}
                    type="text" 
                    className='w-full p-3 placeholder:text-gray-400 text-base' 
                    placeholder='Search here...'
                    />
                </form>
                <button 
                className='absolute right-2 top-1/2 -translate-y-1/2 flex justify-center items-center text-gray-400 group-hover:text-gray-700 group-focus:text-gray-700 group-focus-within:text-gray-700'>
                    <AiOutlineSearch size={'25px'} />
                </button>
            </div>
            {productText && <div className='results absolute top-[100%] z-50 left-0 p-4 bg-gray-100 my-1 rounded-xl w-full'>
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
        </div>
    )
}

export default SearchBar