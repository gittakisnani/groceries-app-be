import { RiUserLine } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'


const User = ({ budget }) => {
  return (
    <div className='flex items-center justify-between gap-4'>
        <button>
            <RiUserLine size='25px' />
        </button>
        <Link href={'/liked'}>
          <button>
              <AiOutlineHeart size='25px' />
          </button>
        </Link>
        <Link href={'/bag'}>
          <button className='flex items-center gap-1'>
              <AiOutlineShoppingCart size='25px' />
              <p className='text-[10px] translate-y-[10px]'>Your Budget <br />
              <span className='font-semibold text-[12px]'>${budget.toFixed(2)}</span>
              </p>
          </button>
        </Link>
    </div>
  )
}

export default User