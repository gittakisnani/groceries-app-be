import Link from 'next/link'
import Image from 'next/dist/client/image'
import React from 'react'
import Logo from '../public/assets/Logo.svg'
const Header = () => {
  return (
    <div className='flex justify-between items-center w-[170px]'>
        <Link href='/'>
            <div className='logo flex items-center gap-2'>
                <Image src={Logo} alt='Logo' width={50} height={50} className=' cursor-pointer' />
                <h5 className='cursor-pointer text-[#fab529]'>Taki Snani</h5>
            </div>
        </Link>
    </div>
  )
}

export default Header