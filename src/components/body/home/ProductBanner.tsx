import Image from 'next/image'
import React from 'react'

const ProductBanner = () => {
  return (
    <div className="grid grid-cols-2 gap-5 px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="relative h-[250px]">
            <Image src="/banner-1.jpg" alt="" className="" fill />
        </div>
        <div className="relative h-[250px]">
            <Image src="/banner-2.jpg" alt="" className="" fill />
        </div>
    </div>
  )
}

export default ProductBanner
