import { RiUserLine } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import { useRouter } from 'next/router';


const User = ({ budget }) => {
  const router = useRouter()
  return (
    <div className='flex items-center justify-between gap-4'>
        <button>
            <RiUserLine size='25px' />
        </button>
          <button onClick={() => router.push('/liked')}>
              <AiOutlineHeart size='25px' />
          </button>
          <button onClick={() => router.push('/bag')} className='flex items-center gap-1'>
              <AiOutlineShoppingCart size='25px' />
              <p className='text-[10px] translate-y-[10px]'>Your Budget <br />
              <span className='font-semibold text-[12px]'>${budget.toFixed(2)}</span>
              </p>
          </button>
    </div>
  )
}

export default User