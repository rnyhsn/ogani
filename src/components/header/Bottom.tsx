import React from 'react'
import CategorySection from './CategorySection'
import SearchSection from './SearchSection'
import { MdCall } from "react-icons/md";

const Bottom = async () => {
  return (
    <div className="flex justify-between gap-6 px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="w-[25%]">
            <CategorySection />
        </div>
        <div className="w-[55%]">
            <SearchSection />
        </div>
        <div className="flex gap-6 items-center w-[20%] justify-end">
            <div className=" w-12 h-12 rounded-full flex items-center justify-center bg-primary/20">
            <MdCall className="text-lg text-primary font-bold" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">+12334545667</span>
                <span className="text-sm text-gray-700">support 24/7 time</span>
            </div>
        </div>
    </div>
  )
}

export default Bottom
