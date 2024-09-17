"use client";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { departments } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";

const CategorySection = () => {
    const [open, setOpen] = useState(true);
  return (
    <div className="relative">
      <div className="flex items-center gap-5 bg-primary text-white py-2.5 px-7 font-extrabold cursor-pointer" onClick={()=> setOpen(prev => !prev)}>
        <FaBars />
        <span className="text-lg mr-1"> All Departments </span>
        <IoIosArrowDown />
      </div>
      <div className={`h-0 flex overflow-hidden absolute z-10 w-full bg-white flex-col gap-2.5 px-8 border border-gray-300 ${open && "h-max py-4"}`}>
        {
            departments.map((item, index) => (
                <Link href="/" key={index}> {item} </Link>
            ))
        }
      </div>
    </div>
  )
}

export default CategorySection

