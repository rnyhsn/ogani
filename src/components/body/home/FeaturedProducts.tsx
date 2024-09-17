"use client";
import { categories } from '@/utils/data'
import React, { useState } from 'react'
import ProductByCategorySection from './ProductByCategorySection';

const FeaturedProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-4xl font-extrabold text-center">Featured Products</h1>
        <div className="h-1 bg-primary w-20 mx-auto mt-3"></div>
        <div className="flex mt-8 gap-6 justify-center">
        {
            categories.map((item, index) => (
                <span key={index} onClick={()=> setSelectedCategory(item)} className={`py-0.5 capitalize text-lg border-b-2 cursor-pointer  ${item === selectedCategory ? "border-primary" : "border-b-transparent"}`}> {item} </span>
            ))
        }
        </div>
        <ProductByCategorySection category={selectedCategory} />
    </div>
  )
}

export default FeaturedProducts
