import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Product from './Product'
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const cats = ['Fruits & Vegetables', 'Breads & Sweets', 'Frozen Seafoods', 'Raw Meat', 'Coffee & Teas', 'Milks & Dairies', 'Fast Foods']

const CategoriesProducts = ( { text, products, showFilters = true,  }) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const [category, setCategory] = useState('All');
    const filteredProducts = products.filter(product => category === 'All' ? product : product.cat === category)

    const handleCategory = e => {
        document.querySelectorAll('.category').forEach(category => category.classList.remove('active-cat'));
        e.target.classList.add('active-cat');
        setCategory(e.target.textContent)
    }
    return (
        <div className='my-10 w-full select-none'>
            <div className='content flex items-centers justify-between'>
            <div className='flex items-center'>
                <h3 className='text-xl md:text-3xl my-6 pr-6 tracking-tight capitalize'>{text}</h3>
               { showFilters &&  <div className='cats hidden md:flex items-center gap-4 translate-y-2'>
                    <p 
                    onClick={handleCategory}
                    className='category cursor-pointer capitalize text-xs font-semibold active-cat'>All</p>
                    {[...cats].map((cat, index) => (
                        <p 
                        onClick={handleCategory}
                        className='category cursor-pointer capitalize text-xs font-semibold' key={index}>{cat}</p>
                    ))}
                </div> }
            </div>
            <div className='flex items-center justify-between gap-2'>
                <span ref={navigationPrevRef} className='prevBtn cursor-pointer p-1 flex items-center justify-center bg-gray-200 text-black'><AiOutlineLeft /></span>
                <span ref={navigationNextRef} className='nextBtn cursor-pointer p-1 flex items-center justify-center bg-gray-200 text-black'><AiOutlineRight /></span>
            </div>
        </div>
        <div className='p-4 bg-white'>
        {filteredProducts.length > 0 && 
        <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation={{
        // Both prevEl & nextEl are null at render so this does not work
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
            setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current

          // Re-init navigation
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
        }}
        >
           
            <div className='flex flex-col md:flex-row items-center gap-4 p-4 w-fit bg-white'>
                    { filteredProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Product product={product} />
                        </SwiperSlide>
                    ))}
            </div>
        </Swiper>
            }
            {
                filteredProducts.length === 0  && <div className='text-center'>{`No ${category === 'All' ? '' : category} Products Are available`}</div>
            }
        </div>
    </div>
  )
}

export default CategoriesProducts