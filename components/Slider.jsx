import Image from 'next/dist/client/image'
import React from 'react'
import Container from './Container'
import Sliderbg from '../public/assets/Sliderbg.webp'
const Slider = () => {
  return (
    <div className='w-full relative py-10 h-full max-h-[500px]'>
        <div className='bg-gray-100 absolute inset-0 opacity-60 z-[-1]'>
            <Image src={Sliderbg} layout='fill' alt='Slider Background' />
        </div>
        <Container>
            <div className='w-full h-full bg-white p-40'></div>
        </Container>
    </div>
  )
}

export default Slider