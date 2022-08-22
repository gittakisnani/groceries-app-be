import React from 'react'
import Container from './Container'
import { FaShippingFast } from 'react-icons/fa'
import { BsTelephone, BsFillPinMapFill, BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FiRefreshCcw } from 'react-icons/fi'
import { MdSecurity, MdSupport, MdLocalOffer } from 'react-icons/md'
import Offer from './Offer'


const Footer = () => {
    const offersData = [
        {
            icon: <FaShippingFast />,
            text: 'Free Shipping',
            subText: 'For all orders over $200'
        },
        {
            icon: <FiRefreshCcw />,
            text: '1 & 1 return',
            subText: 'Cancelation after 1 day'
        },
        {
            icon: <MdSecurity />,
            text: '100% Secure Payment',
            subText: 'Guarantee secure payments'
        },
        {
            icon: <MdSupport />,
            text: '24/7 Dedicated Support',
            subText: 'Anywhere & anytime'
        },
        {
            icon: <MdLocalOffer />,
            text: 'Daily Offers',
            subText: 'Discount up to 70% OFF'
        },
    ]
    return (
        <div className='w-full bg-white'>
            <Container>
                <div className='offers grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 py-10'>
                    {offersData.map((offer, index) => (
                        <Offer 
                        key={index}
                        offer={offer}
                        />
                    ))}
                </div>
                <div className="footer-infos py-14 border-y border-gray-600/20 grid gird-cols-2 sm-grid-cols-3 md:grid-cols-7 ga gap-x-10 gap-y-2">
                    <div className='flex flex-col p-4 col-span-2'>
                        <h3 className='text-[15px] font-semibold'>TaFood Your Online Foods & Groceries</h3>
                        <p className='py-4 desc text-left text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet exercitationem quod minus, commodi debitis quo enim molestiae quia facilis.</p>
                    
                        <div className='phone flex flex-col py-4 gap-2 text-xs'>
                            <div className='flex items-center gap-4'>
                                <span className='text-[#fab529] text-lg'><BsTelephone /></span>
                                <p className='text-gray-400'>24/7 Support</p>
                            </div>
                            <p className='text-xl font-bold pl-4 text-black'>(+295) 7692-4277</p>
                        </div>
                        <div className='flex items-center gap-4 py-1'>
                            <span className='text-[#fab529] text-lg'><BsFillPinMapFill /></span>
                            <p className='text-gray-400 text-xs'>959 | NYC</p>
                        </div>
                        <div className='flex items-center gap-4 py-1'>
                            <span className='text-[#fab529] text-lg'><GoMail /></span>
                            <p className='text-gray-400 text-xs'>Takisnbusisness@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='text-black capitalize mb-6 font-semibold'>Useful Links</p>
                        <ul className='w-full text-gray-400'>
                        {['About us', 'Contact', 'Help center', 'Career', 'Policy', 'Map'].map((item, index) => (
                            <li 
                            className='my-2 capitalize text-sm'
                            key={index}
                            >
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='text-black capitalize mb-6 font-semibold'>Help center</p>
                        <ul className='w-full text-gray-400'>
                        {['About us', 'Contact', 'Help center', 'Career', 'Policy', 'Map'].map((item, index) => (
                            <li 
                            className='my-2 capitalize text-sm'
                            key={index}
                            >
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='text-black capitalize mb-6 font-semibold'>Business</p>
                        <ul className='w-full text-gray-400'>
                        {['About us', 'Contact', 'Help center', 'Career', 'Policy', 'Map'].map((item, index) => (
                            <li 
                            className='my-2 capitalize text-sm'
                            key={index}
                            >
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className='flex flex-col p-4 col-span-2'>
                    <p className='text-black capitalize mb-6 font-semibold'>Business</p>
                    <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto!</p>
                    <form onSubmit={e => e.preventDefault()} className='form-wrapper flex-col mt-4 '>
                        <div className='w-full flex justify-between items-center group border border-b-0 border-transparent group focus-within:border-[#fab529] hover:border-[#fab529]'>
                            <span className='p-4 text-gray-200 duration-300 group-hover:text-[#fab529] group-focus-within:text-[#fab529] text-xl'><GoMail /></span>
                            <input 
                            type="text"
                            className='flex-1'
                            placeholder='Email...'
                            />
                        </div>
                        <button className='w-full p-3 uppercase bg-[#fab529] hover:bg-[#f8ae19] duration-300 ease-out text-sm'>Subscribe</button>
                    </form>
                    </div>
                </div>
                <div className='py-10 items-center justify-between flex flex-col md:flex-row gap-y-4 text-sm'>
                    <p className='copyright'>© 2022 All Rights Reserved</p>
                    <p className=''>Made with 💗 by <span className='text-slate-600 cursor-pointer'>Taki Snani</span></p>
                    <div className='flex  items-center gap-4 text-slate-700'>
                        <a href='https://www.facebook.com' title='Check Facebook' className='cursor-pointer text-lg'><BsFacebook /></a>
                        <a href='https://twitter.com/yestakisnani' title='Check Twitter' className='cursor-pointer text-lg'><BsTwitter /></a>
                        <a href='https://www.linkedin.com/in/taki-snani-1ba6ba236/' title='Check LinkedIn' className='cursor-pointer text-lg'><BsLinkedin /></a>
                        <a href='hhttps://github.com/gittakisnani' title='Check Github' className='cursor-pointer text-lg'><BsGithub /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer