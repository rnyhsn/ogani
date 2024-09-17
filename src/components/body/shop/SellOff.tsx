import { featuredProducts } from '@/utils/data'
import React from 'react'
import ProductCard from '../home/ProductCard'

const SellOff = () => {
  return (
    <div className="pb-10 border-b border-gray-300">
      <h1 className="font-extrabold text-4xl mb-2 pb-2 border-b-[4px] border-primary w-max"> Sale Off </h1>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10">
      {
        featuredProducts.map((item, index) => (
               index < 3 && <ProductCard item={item} key={index} offer={true} />   
        ))
      }
      </div>
      <div className="flex gap-1 items-center justify-center mt-5">
        <div className="w-3 h-3 rounded-full border-2 border-gray-400 cursor-pointer"></div>
        <div  className="w-3 h-3 rounded-full border-2 border-gray-400 cursor-pointer"></div>
      </div>
    </div>
  )
}

export default SellOff
