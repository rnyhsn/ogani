import Image from 'next/image'
import React from 'react'

const SlideProductCard = ({item}: {item: {title: string, img: string}}) => {
  return (
    <div className="flex-1 h-[250px] shrink-0 bg-seconary px-4 py-6 bg-secondary">
        <div className="w-full relative h-[170px]">
        <Image src={item.img} alt={item.title} className="object-cover" fill />
        </div>
        <div className="py-2 text-center bg-white font-bold"> {item.title} </div>
    </div>
  )
}

export default SlideProductCard
