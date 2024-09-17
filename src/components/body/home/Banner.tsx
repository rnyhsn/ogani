import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex px-4 md:px-10 lg:px-20 xl:px-28">
        <div  className="w-[25%]"></div>
        <div className="w-[75%] h-[400px] bg-secondary ml-4 flex items-center relative">
            <div className="flex flex-col gap-2 pl-14 absolute z-10">
                <h1 className="text-primary uppercase font-bold tracking-widest">Fruit Fresh</h1>
                <p className="text-5xl font-extrabold text-gray-900 leading-[1.1]">Vegetable<br/>100% Organic</p>
                <p className="text-gray-600 pt-2 py-5">Free Pickup & Delivery Available</p>
                <button className="py-2.5 px-7 bg-primary uppercase tracking-widest w-max text-white font-extrabold">Show Now</button>
            </div>
            <div className="relative w-full h-full">
                <Image src="/banner.jpg" alt="" className="object-cover" fill />
            </div>
        </div>
    </div>
  )
}

export default Banner
