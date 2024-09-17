import { menuItems } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const Middle = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 flex justify-between py-4 items-center">
        <div>
            <Image src="/logo.png" alt="" width={120} height={60} />
        </div>
        <div className="flex gap-12 font-bold uppercase justify-start">
        {
            menuItems.map((item, index) => (
                <NavItem item={item} key={index} />
            ))
        }
        </div>
        <div className="flex items-center gap-8 text-sm">
            <div className="flex gap-3">
                <div className="relative">
                    <FaHeart className="text-xl" />
                    <span className="w-4 h-4 rounded-full flex items-center text-xs justify-center text-white bg-primary absolute -top-1 -right-2">0</span>
                </div>
                <div className="relative">
                    <GiShoppingBag className="text-xl" />
                    <span className="w-4 h-4 rounded-full flex items-center text-xs justify-center text-white bg-primary absolute -top-1 -right-2">0</span>
                </div>
                
            </div>
            <div>
                <span>Item:</span>  <span className="font-bold">$150.00</span>
            </div>
        </div>
    </div>
  )
}

export default Middle
