import Image from 'next/image'
import { CiCalendar } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";


const ProductBlogCard = () => {
  return (
    <div className="">
        <div className="relative w-full h-[250px]">
            <Image src="/blog-1.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="py-4">
            <div className="flex gap-5">
                <div className="flex items-center text-gray-500 gap-1.5">
                    <CiCalendar className="text-xl" /> <span>May 4,2019</span>
                </div>
                <div className="flex items-center text-gray-500 gap-1.5">
                    <FaRegComment className="" /> <span className="text-lg">5</span>
                </div>
            </div>
            <h2 className="text-xl font-extrabold my-3">Cooking tips make cooking simple</h2>
            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
        </div>
    </div>
  )
}

export default ProductBlogCard
