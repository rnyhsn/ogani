"use client";
import { productionDescription } from "@/utils/data"
import { useState } from "react";



const ProductInfo = () => {
  const [selected, setSelected] = useState("Description");
  return (
    <div>
      <div className="flex items-center gap-8">
        <div className="border-t border-gray-300 w-[35%]"></div>
        <div className="flex gap-8 font-bold text-lg text-gray-500">
        {
          productionDescription.map((item, index) => (
            <span className={`cursor-pointer ${item.title === selected && "text-gray-800"}`} onClick={()=> setSelected(item.title)} key={index}> {item.title} </span>
          ))
        }
        </div>
        <div className="border-t border-gray-300 w-[35%]"></div>
      </div>
      <div className="mt-10">
      {
        productionDescription.filter(item => item.title === selected)[0].description
      }
      </div>
    </div>
  )
}

export default ProductInfo
