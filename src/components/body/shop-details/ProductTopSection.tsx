import Image from 'next/image'
import React from 'react'
import Reviews from './Reviews'
import ProductCountUpdate from './ProductCountUpdate'

const ProductTopSection = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <div className="relative w-full h-[500px]">
            <Image src="/feature-6.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="flex gap-4 mt-5">
            <Image src="/feature-4.jpg" alt="" width={120} height={80} className="" />
            <Image src="/feature-5.jpg" alt="" width={120} height={80} className="" />
            <Image src="/feature-6.jpg" alt="" width={120} height={80} className="" />
            <Image src="/feature-7.jpg" alt="" width={120} height={80} className="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 mt-10">
        <h1 className="text-3xl font-extrabold">Vetgetable’s Package</h1>
        <Reviews />
        <p className="text-3xl text-red-500 font-bold">$50.00</p>
        <p className="text-gray-500">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
        <ProductCountUpdate />
      </div>
    </div>
  )
}

export default ProductTopSection
