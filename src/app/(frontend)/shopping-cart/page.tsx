import CartList from '@/components/body/cart/CartList'
import ShopBanner from '@/components/body/shop/ShopBanner'
import React from 'react'

const ShoppingCartPage = () => {
  return (
    <div>
      <ShopBanner />
      <div className="px-4 md:px-10 lg:px-20 xl:px-28 mt-20">
        <CartList />
      </div>
    </div>
  )
}

export default ShoppingCartPage
