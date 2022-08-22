import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { FcLock } from 'react-icons/fc'
import { BsAlarm } from 'react-icons/bs'
import ContentAdjust from '../components/ContentAdjust'
import Slider from '../components/Slider'
import Category from '../components/Category'
import Product from '../components/Product'
import CategoriesProducts from '../components/CategoriesProducts'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import Layout from '../components/Layout'
import data from '../data/data'

export default function Home() {
  const { products, categories: cats } = data;
  const ContentOptions = ['Shop By Category', 'Deals Today', 'Special Prices', 'Recently Viewed'];
  const countDown = useRef('06:24:33');
  countDown.current = `${new Date().getHours()}H`;
  return (
    <div>
      <Head>
        <title>Groceries App</title>
        <meta name="description" content="Taki Snani Groceries Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='content-filter p-2'>
          <Container>
            <div className='w-full flex items-center justify-center md:gap-3'>
                {ContentOptions.map((option, index) => (
                  <ContentAdjust key={index} text={option} active={index === 0 ? true : false} />
                ))}
            </div>
          </Container>
        </div>
        <Slider />
        <div className='py-4'>
          <Container>
                  <div className='content flex  items-center'>
                    <h3 className='text-3xl my-6 pr-6 tracking-tight'>Browse By Category</h3>
                    <Link href={'/categories'}>
                      <p className='text-gray-300 text-lg font-thin tracking-tighter translate-y-2 flex items-center cursor-pointer'>
                      All Categories
                      <AiOutlineRight fontSize='15px' />
                      </p>
                    </Link>
                  </div>
                <div className='flex items-center gap-4 max-w-full overflow-hidden py-4'>
                {cats && cats.map(cat => (
                      <Category key={cat.catId} cat={cat.cat} />
                ))}
                </div>
          </Container>
        </div>
        <div className='py-4'>
          <Container>
                  <div className='flex items-stretch gap-4 flex-col md:flex-row max-w-full overflow-hidden'>
                    <div className='overflow-hidden '>
                          <div className='content flex items-center justify-between'>
                          <h3 className='text-xl md:text-3xl my-6 pr-3 md:pr-6 tracking-tight'>Top Saver Today</h3>
                          <p className='text-gray-300 text-base md:text-lg font-thin tracking-tighter translate-y-2 flex items-center'>
                          All Offers
                          <AiOutlineRight fontSize='15px' />
                          </p>

                          <div className='countdown flex items-center gap-2 bg-[#fb532c] px-4 py-2 rounded-lg text-white mx-2 md:ml-32'>
                          <span><BsAlarm /></span>
                          Expires In {countDown.current}
                          </div>

                          <div className='flex items-center gap-2 flex-1 justify-end'>
                              <span className='prevArrow cursor-pointer p-1 flex items-center justify-center bg-gray-200 text-black'><AiOutlineLeft /></span>
                              <span className='nextArrow cursor-pointer p-1 flex items-center justify-center bg-gray-200 text-black'><AiOutlineRight /></span>
                            </div>
                          </div>
                          <Swiper
                          modules={[Navigation]}
                          spaceBetween={16}
                          slidesPerView={2}
                          navigation={{
                            prevEl: '.prevArrow',
                            nextEl: '.nextArrow'
                          }}
                          >
                              {products.map((product, index) => (
                                <SwiperSlide key={index} className='h-full'>
                                    <Product  key={index} product={product} />
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        </div>
                    <div className='flex-grow shrink-0 p-4 relative z-1 text-center bg-red-200/60 overflow-hidden flex flex-col justify-center items-center rounded-lg'>
                      <h3 className='text-4xl text-red-400'>15% OFF</h3>
                      <p className='py-4'>For few members sign up for the first time</p>
                      <form onSubmit={e => e.preventDefault()} className='w-full flex gap-4 flex-col'>
                            <div className='bg-white mail-input flex items-center border border-gray-300 hover:border-[#fab529] focus-within:border-[#fab529]'>
                              <span className='icon px-2'><FiMail /></span>
                              <input 
                              type="text" 
                              className='py-2 px-4 flex-1 w-full'
                              placeholder='Email'  
                              />
                            </div>
                            <div className='bg-white pass flex items-center border border-gray-300 hover:border-[#fab529] focus-within:border-[#fab529]'>
                              <span className='icon px-2'><FcLock /></span>
                              <input 
                              type="text"
                              className='py-2 px-4 flex-1 w-full' 
                              placeholder='Password'  
                              />
                            </div>
                            <div className='bg-white pass flex items-center border border-gray-300 hover:border-[#fab529] focus-within:border-[#fab529]'>
                              <span className='icon px-2'><FcLock /></span>
                              <input 
                              type="text" 
                              className='py-2 px-4 flex-1 w-full'
                              placeholder='Re-write password'  
                              />
                            </div>
                            <button 
                            className='bg-[#fab529]/90 hover:bg-[#fab529] py-2 px-4 rounded-md w-[70%] mx-auto'
                            >Register Now</button>
                      </form>
                    </div>
                  </div>
          </Container>
        </div>
        <div 
        className='w-full holder py-10 bg-gray-100'>
            <Container>
                <CategoriesProducts text={'Best Seller'} products={products} id='bestSell' />
                <CategoriesProducts text={'Just Landing'} products={products} id='justLand' />
                <CategoriesProducts text={'Essential Products'} products={products} id='essentials' />
            </Container>
        </div>

    </div>
  )
}

Home.getLayout = (page, products, categories) => (<Layout products={products} cats={categories}>{page}</Layout>)
