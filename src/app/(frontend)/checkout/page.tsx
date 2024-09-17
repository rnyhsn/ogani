import ShopBanner from '@/components/body/shop/ShopBanner'
import React from 'react'

const CheckoutPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <ShopBanner />
      <div className="px-4 md:px-10 lg:px-20 xl:px-28 mb-10">
        <h1 className="text-4xl font-extrabold mb-5">Billing Details</h1>
          <form action="" className="flex gap-10">
            <div className="flex-[2] flex flex-col gap-4">
              <div className="flex gap-10">
                <div className="flex gap-1 flex-1 flex-col">
                  <label htmlFor="">First Name</label>
                  <input type="text" name="firstName" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
                </div>
                <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
                </div>
              </div>
              <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">Address</label>
                <input type="text" name="address" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
              </div>
              <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">Town/City</label>
                <input type="text" name="city" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
              </div>
              <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">Country</label>
                <input type="text" name="country" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
              </div>
              <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">Postcode/Zip</label>
                <input type="text" name="country" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
              </div>
              <div className="flex gap-1 flex-1 flex-col">
                <div className="flex gap-1 flex-1 flex-col">
                  <label htmlFor="">Phone</label>
                  <input type="text" name="phone" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
                </div>
                <div className="flex gap-1 flex-1 flex-col">
                <label htmlFor="">E-mail</label>
                <input type="text" name="email" className="py-2 px-4 border border-gray-300 rounded-md outline-none" />
                </div>
              </div>
            </div>
          <div className="px-6 py-8 bg-secondary rounded-md flex-1 h-max">
            <h1 className="text-2xl font-extrabold mb-5">Your Order</h1>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-between mt-5 text-lg">
              <span className="font-extrabold">Products</span>
              <span className="font-extrabold">Total</span>
            </div>
            <div className="flex justify-between py-2 text-gray-600">
              <span>Vegetable’s Package</span>
              <span className="font-extrabold">$20</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Vegetable’s Package</span>
              <span className="font-extrabold">$20</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Vegetable’s Package</span>
              <span className="font-extrabold">$20</span>
            </div>
            <hr className="border-b border-gray-300 my-5" />
            <div className="flex justify-between font-extrabold text-gray-600 text-lg">
              <span>Subtotal</span>
              <span>$100</span>
            </div>
            <hr className="border-b border-gray-300 my-5" />
            <div className="flex justify-between font-extrabold text-gray-600 text-lg">
              <span>Total</span>
              <span>$100</span>
            </div>
            <button className="py-2.5 bg-primary text-white font-bold w-full mt-5">Place Order</button>
          </div>
          
          </form>
      </div>
    </div>
  )
}

export default CheckoutPage
