"use client";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";


const ProductCountUpdate = () => {
    const [value, setValue] = useState(1);
    const stock = 10;
    const handleValue = (type: string) => {
            type === '+' ? setValue(prev => prev < stock ? prev+1: prev): setValue(prev => prev > 1 ? prev-1 : prev);
    }
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2 items-center w-[120px] justify-between bg-secondary p-2">
        <button onClick={()=> handleValue('-')} > <FaMinus /> </button>
             <span className="font-bold">
                {value}
            </span> 
        <button onClick={()=> handleValue('+')}> <MdAdd /> </button>
      </div>
      <Link href="/shopping-cart" className="py-2 px-5 bg-primary text-white font-bold rounded-sm uppercase tracking-wider">Add to Cart</Link>
      <div className="p-2 bg-secondary cursor-pointer">
        <FaRegHeart className="text-2xl" />
      </div>
    </div>
  )
}

export default ProductCountUpdate
