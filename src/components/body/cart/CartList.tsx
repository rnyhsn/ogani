import Image from 'next/image'
import React from 'react'

const CartList = () => {
  return (
    <div>
      <table className="w-full text-left">
        <thead>
            <tr className="border-b border-gray-200">
                <th className="py-2">Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200">
                <td className="flex gap-4 items-center py-2">
                    <Image src="/feature-8.jpg" alt="" width={80} height={80} className="" />
                    <span> Product Title </span>
                </td>
                <td>
                    $55
                </td>
                <td>
                    <div className="flex items-center gap-2">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </td>
                <td>
                    $220
                </td>
            </tr>
            <tr className="border-b border-gray-200">
                <td className="flex gap-4 items-center py-2">
                    <Image src="/feature-8.jpg" alt="" width={80} height={80} className="" />
                    <span> Product Title </span>
                </td>
                <td>
                    $55
                </td>
                <td>
                    <div className="flex items-center gap-2">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </td>
                <td>
                    $220
                </td>
            </tr>
            <tr className="border-b border-gray-200">
                <td className="flex gap-4 items-center py-2">
                    <Image src="/feature-8.jpg" alt="" width={80} height={80} className="" />
                    <span> Product Title </span>
                </td>
                <td>
                    $55
                </td>
                <td>
                    <div className="flex items-center gap-2">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </td>
                <td>
                    $220
                </td>
            </tr>
            <tr className="border-b border-gray-200">
                <td className="flex gap-4 items-center py-2">
                    <Image src="/feature-8.jpg" alt="" width={80} height={80} className="" />
                    <span> Product Title </span>
                </td>
                <td>
                    $55
                </td>
                <td>
                    <div className="flex items-center gap-2">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </td>
                <td>
                    $220
                </td>
            </tr>
            <tr className="border-b border-gray-200">
                <td className="flex gap-4 items-center py-2">
                    <Image src="/feature-8.jpg" alt="" width={80} height={80} className="" />
                    <span> Product Title </span>
                </td>
                <td>
                    $55
                </td>
                <td>
                    <div className="flex items-center gap-2">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </td>
                <td>
                    $220
                </td>
            </tr>
        </tbody>
      </table>
      <div className="flex justify-between mt-5">
        <button className="py-2 px-5 bg-secondary rounded-md">Continue Shopping</button>
        <button className="py-2 px-5 bg-secondary rounded-md">Update Cart</button>
      </div>
      <div className="py-10 flex justify-between">
        <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-4">Discount Code</h1>
            <div>
                <input type="text" className="w-[350px] py-3 border border-gray-400 outline-none px-4 mr-4" placeholder="Enter your coupon code" />
                <button className="px-8 bg-gray-600 text-white font-bold py-3">Apply Coupon</button>
            </div>
        </div>
        <div className="p-8 bg-secondary rounded-md w-[400px]">
            <h1 className="text-xl font-extrabold mb-5">Cart Total</h1>
            <div className="flex justify-between pb-4 border-b border-gray-300">
                <span className="font-extrabold">Subtotal</span>
                <span className="font-extrabold text-red-500">$456</span>
            </div>
            <div className="flex justify-between py-4">
                <span className="font-extrabold">Subtotal</span>
                <span className="font-extrabold text-red-500">$456</span>
            </div>
            <button className="py-2.5 bg-primary text-white rounded-sm w-full">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartList
