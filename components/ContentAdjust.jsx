import React, { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosFlash } from 'react-icons/io'
import { IoPricetagOutline } from 'react-icons/io5'
import { RiRefreshLine } from 'react-icons/ri'
const icons = {
  'Shop By Category': <AiOutlineMenu />,
  'Deals Today': <IoIosFlash />,
  'Special Prices': <IoPricetagOutline />,
  'Recently Viewed': <RiRefreshLine />
}
const ContentAdjust = ({ text, active = false }) => {
  const ref = useRef()

  const handleClick = () => {
    document.querySelectorAll('.content-adjust').forEach(item => item.classList.remove('active'));
    ref.current.classList.add('active')
  }


  return (
    <div 
    ref={ref}
    className={active ? 'px-3 py-2 flex items-center gap-2 cursor-pointer content-adjust active' : 'px-3 py-2 flex items-center gap-2 cursor-pointer content-adjust'}
    onClick={handleClick}
    style={{borderRadius: '6px'}}
    >
      <span>{icons[text]}</span>
      <p className='tracking-tight'>{text}</p>
    </div>
  )
}

export default ContentAdjust