import ProductSlide from '@/components/body/home/ProductSlide'
import Department from '@/components/body/shop/Department'
import OrganizedProducts from '@/components/body/shop/OrganizedProducts'
import PriceMutation from '@/components/body/shop/PriceMutation'
import SellOff from '@/components/body/shop/SellOff'
import ShopBanner from '@/components/body/shop/ShopBanner'
import React from 'react'

const ShopPage = () => {
  return (
    <div>
      <ShopBanner />
      <div className="px-4 md:px-10 lg:px-20 xl:px-28 mt-16 flex gap-8">
        {/* Sidebar section */}
        <div className="flex flex-col gap-10 flex-1">
            <Department />
            <PriceMutation />
            <ProductSlide title="Latest Products" />
        </div>
        {/* Sale Product section */}
        <div className="flex-[3]">
            <SellOff />
            <OrganizedProducts />
        </div>
      </div>
    </div>
  )
}

export default ShopPage
