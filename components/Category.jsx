import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import Coffee from '../public/assets/Coffee.svg'
import Bread from '../public/assets/Bread.svg'
import FastFood from '../public/assets/Coffee.svg'
import Meat from '../public/assets/Meat.svg'
import Milk from '../public/assets/Milk.svg'
import SeaFood from '../public/assets/SeaFood.svg'
import Vegetables from '../public/assets/Vegetables.svg'

const icons = {
    'Fruits & Vegetables': Vegetables, 
    'Breads & Sweets': Bread,
    'Frozen Seafoods': SeaFood,
    'Raw Meat': Meat,
    'Coffee & Teas': Coffee,
    'Milks & Dairies': Milk,
    'Fast Foods': FastFood
}

const Category = ({ cat }) => {
  return (
        <Link href={`/categories/${cat}`}>
            <div className='w-[140px] h-[180px] min-w-[140px] min-h-[180px] bg-gray-200 transition-all duration-300 ease-in-out hover:bg-white rounded-xl px-4 py-8 hover:shadow-2xl hover:shadow-gray-300 flex flex-col items-center gap-3 cursor-pointer '
            >
                  <div className='icon'>
                      <Image src={icons[cat]} alt={cat} width={50} height={50} />
                  </div>
                  <p className='cat text-center'>{cat}</p>
            </div>
        </Link>
  )
}

export default Category