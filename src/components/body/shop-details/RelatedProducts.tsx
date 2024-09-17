import { featuredProducts } from '@/utils/data'
import React from 'react'
import ProductCard from '../home/ProductCard'

const RelatedProducts = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-center">Related Product</h1>
      <hr className="h-1 bg-primary w-20 mx-auto mt-4" />
      <div className="mt-10">
      <div className="grid grid-cols-4 gap-x-4 gap-y-10">
      {
        featuredProducts.map((item, index) => (
               index < 4 && <ProductCard item={item} key={index} offer={false} />   
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default RelatedProducts
