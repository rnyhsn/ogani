import { sliderProducts } from '@/utils/data'
import React from 'react'
import SlideProductCard from './SlideProductCard'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const SliderProducts = () => {
  return (
    <div className="w-full">
        <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-28 flex justify-between gap-8 relative">
        {
            sliderProducts.map((item, index) => (
                <SlideProductCard item={item} key={index} />
            ))
        }
        <div className="absolute top-1/2 -left-10"> <IoIosArrowBack /> </div>
        <div className="absolute top-1/2 -right-10"> <IoIosArrowForward /> </div>
        </div>
    </div>
  )
}

export default SliderProducts
