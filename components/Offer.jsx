import React from 'react'

const Offer = ({ offer }) => {
    const { icon, text, subText } = offer;
  return (
    <div className='w-full my-2 md:my-0 flex items-center gap-4'>
        <span className='text-[#fab529] text-2xl'>{icon}</span>
        <div className='desc flex flex-col gap-2'>
            <p className='font-semibold text-sm text-slate-900 capitalize'>{text}</p>
            <p className='font-light text-gray-400 text-xs'>{subText[0].toUpperCase() + subText.slice(1)}</p>
        </div>
    </div>
  )
}

export default Offer