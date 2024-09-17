import React from 'react'
import ProductSlide from './ProductSlide'

const ProductSlideSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 grid grid-cols-3 gap-10">
        <ProductSlide title="Latest Products" />
        <ProductSlide title="Top Rated Products" />
        <ProductSlide title="Review Products" />
    </div>
  )
}

export default ProductSlideSection
