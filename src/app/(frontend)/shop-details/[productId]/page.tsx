import ProductInfo from '@/components/body/shop-details/ProductInfo'
import ProductTopSection from '@/components/body/shop-details/ProductTopSection'
import RelatedProducts from '@/components/body/shop-details/RelatedProducts'
import ShopBanner from '@/components/body/shop/ShopBanner'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className="mb-20">
        <ShopBanner />
        <div className="px-4 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-10 mt-20">
            <ProductTopSection />
            <ProductInfo />
            <RelatedProducts />
        </div>
    </div>
  )
}

export default SingleProduct
