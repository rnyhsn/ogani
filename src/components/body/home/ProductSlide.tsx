import { featuredProducts } from "@/utils/data";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductSlide = ({title}: {title: string}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-extrabold"> {title} </h1>
        <div className="flex gap-1">
            <div className="w-7 h-7 border border-gray-300 rounded-sm flex items-center justify-center cursor-pointer"> <IoIosArrowBack /> </div>
            <div className="w-7 h-7 border border-gray-300 rounded-sm flex items-center justify-center cursor-pointer"> <IoIosArrowForward /> </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {
        featuredProducts.map((item, index) => (
            index < 3 && <div key={index} className="flex">
                <Image src={item.img} alt="" width={100} height={100} />
                <div className="py-4 px-8">
                    <h2> {item.title} </h2>
                    <h2 className="text-lg font-extrabold"> ${item.price.toFixed(2)} </h2>
                </div>
            </div>
        ))
        }
      </div>
    </div>
  )
}

export default ProductSlide
