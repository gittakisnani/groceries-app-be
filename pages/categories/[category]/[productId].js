import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Container from '../../../components/Container';
import Image from 'next/dist/client/image';
import { AiFillStar, AiOutlineStar, AiOutlinePlus, AiOutlineMinus, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Head from 'next/head';
import Layout from '../../../components/Layout';
import data from '../../../data/data'
const ProductPage = () => {
    const router = useRouter();
    const { category, productId } = router.query;
    const { products } = data
    const product = products.find(pr => Number(pr.productId) === Number(productId) && pr.cat === decodeURI(category))
    const [qnt, setQnt] = useState(0);
    const [liked, setLiked] = useState([]);
    const [bag, setBag] = useState([]);
    const [personal, setPersonal] = useState({})
    const handleIncrement = () => setQnt(qnt + 1)
    const handleDecrement = () => setQnt(qnt <= 0 ? qnt : qnt - 1);


    const getPersonal = async () => {
        setPersonal(personal)
        setLiked(personal.myLiked || []);
        setBag(personal.myBag || [])
        return personal;
    }

    const handleLike = (productId) => {
        //add to db, call getPersonal
        getPersonal()
        const isLiked = liked.includes(productId);
        const newArr = isLiked ? liked.filter(id => id !== productId) : [...liked, productId]
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

    useEffect(() => {
        getPersonal()
    }, [])

    const createRatings = (numOfStars) => {
        const filledArr = []
        for(let i = 0; i < Number(numOfStars); i++) {
            filledArr.push(<AiFillStar color='#fab529' size={'20px'} />)
        }
        for(let i = 0; i < 5 - Number(numOfStars); i++) {
            filledArr.push(<AiOutlineStar color='#fab529' size={'20px'} />)
        }
        return filledArr
    }

    const handleAddToBag = async (productId) => {
        if(!qnt) return;
        getPersonal();
        const newArr = [...bag, ...Array(qnt).fill(productId)]
        // const response = await fetch('http://localhost:3000/api/db/personal', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({...personal, myBag: newArr })
        // });

        // if(!response.ok) throw new Error('Server Error');
        // const data = await response.json();
        setQnt(0)
        // return data
    }

    if(product) return (
    <div className='w-full py-10'>
        <Head>
            <title>{product?.name || 'Unknown' }</title>
            <meta name="description" content={product?.name || 'Unknown' } />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* View Product */}
                <div 
                className='product flex flex-col items-center'
                >
                    <p className='route text-sm'>
                    <Link href={`/categories`}>
                        <a className='hover:underline hover:text-slate-600'>Categories</a>
                    </Link>
                    <span className='px-2 translate-y-1'>{'>'}</span>
                    <Link href={`/categories/${category}`}>
                        <a className='hover:underline hover:text-slate-600'>{decodeURI(category)}</a>
                    </Link>
                    <span className='px-2 translate-y-1'>{'>'}</span>
                    <Link href={`/categories/${category}/${product?.productId || 0}`}>
                        <a className='hover:underline hover:text-slate-600'>{product?.name || 'Unknown' }</a>
                    </Link>
                    </p>
                    <div className='w-full p-10 pb-0'>
                        <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        >
                            <SwiperSlide>
                                <Image src={product.mainImg} alt={product?.name || 'Unknown' } width={'600'} height={'700'} />
                            </SwiperSlide>
                            {Object.entries(product.previewImg).map(([key, src]) => (
                                <SwiperSlide key={key}>
                                    <Image src={src} alt={product?.name || 'Unknown' } width={'600'} height={'700'} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='flex items-center justify-center gap-2 mt-4'>
                        {Object.entries(product.previewImg).map(([key, src]) => (
                            <div key={key}>
                                <Image src={src} alt={product?.name || 'Unknown' } height="70" width="70" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Product desc */}
                <div className='p-10 text-black'>
                    <h3 className='flex justify-between items-center text-black text-xl md:text-2xl after:[""] after:px-10 after:py-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 relative pb-4 '
                    ><span>{product?.name || 'Unknown' }</span>
                    <span className='cursor-pointer text-3xl' onClick={() => handleLike(product?.productId || 0)}>{liked.includes(product?.productId || 0) ? <AiFillHeart color='#fab529' /> : <AiOutlineHeart color='#fab529' />}</span>
                    </h3>
                    <p className='text-lg font-semibold py-4'>${product.price.toFixed(2)}</p>
                    <p className='w-full text-left leading-7 py-4'>
                        {product.desc}
                    </p>
                    {/* color='#fab529' */}
                    {Object.entries(product.rating).map(([rate, number]) => (
                        <div className='rate flex  gap-1 items-center py-1' key={rate}>
                            {createRatings(Number(rate))}
                            <span className='ml-4 text-sm'><span className='font-semibold'>{number}</span> Reviews</span>
                        </div>
                    ))}


                    <div className='qnt flex w-full items-center justify-between'>
                        <p className='font-semibold'>Quantity:</p>
                        <div className='grid grid-cols-3 border border-[#fab529] rounded-md'>
                            <button className='p-2' onClick={handleDecrement}><AiOutlineMinus /></button>
                            <button className='p-2'>{qnt}</button>
                            <button className='p-2' onClick={handleIncrement}><AiOutlinePlus /></button>
                        </div>
                    </div>
                    <div className='py-4'>
                        <button 
                        disabled={!qnt}
                        onClick={() => handleAddToBag(product?.productId || 0)}
                        className='border disabled:border-[#d1d1d1] disabled:text-[#d1d1d1] disabled:hover:bg-transparent border-[#fab529] hover:border-transparent p-3 text-[#fab529] hover:text-black duration-200 ease-out hover:bg-[#fab529] bg-inherit w-full'>Add to bag</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
    return null
}

ProductPage.getLayout = (page, products, categories) => (<Layout products={products} cats={categories}>{page}</Layout>)

// export async function getStaticProps(context) {
//     const { category, productId } = context.params;
//     try{
//         const response = await fetch('http://localhost:3000/api/db/data');
//         if(!response.ok) throw Error('Something Went wrong! please refresh the page or try later.')
//         const dataJson = await response.json();
//         return {
//             props: {
//                 error: false,
//                 dataJson,
//                 product: dataJson.products.find(product => Number(product?.productId || 0) === Number(productId) && product.cat === category),
//             }
//         }
//     } catch(err) {
//         console.error(err);
//         return {
//             props: {
//                 error: true,
//                 errMsg: 'Something Went wrong! please refresh the page or try later.',
//                 productId: undefined,
//             }
//         }
//     }
// } 

// export async function getStaticPaths() {
//     const response = await fetch('http://localhost:3000/api/db/data');
//     const dataJson = await response.json();
//     const { products } = dataJson;
//     const paths = products.map(product => ({ params: { "category": product.cat, "productId": product?.productId || 0.toString()} }))

//     return { paths, fallback: false}
// }

export default ProductPage