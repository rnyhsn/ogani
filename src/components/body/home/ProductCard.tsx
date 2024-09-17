import Image from 'next/image'
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const ProductCard = ({item, offer}: {item: {title: string, price: number, img: string}, offer: boolean }) => {
  return (
    <Link href={`/shop-details/435435`} className="group">
        <div className="w-full h-[250px] relative overflow-hidden">
          {
            offer && (
              <div className="w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center absolute left-3 top-3 z-10 text-sm">-20%</div>
            )
          }
            <Image src={item.img} alt="" fill />
            <div className="flex gap-2 absolute z-10 left-1/2 -translate-x-1/2 -bottom-8 group-hover:bottom-5 transition-all duration-50">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer hover:bg-primary hover:text-white">
              <FaHeart />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer hover:bg-primary hover:text-white">
              <FaRetweet />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer hover:text-white hover:bg-primary">
              <FaShoppingCart />
              </div>
            </div>
        </div>
        <div className="flex flex-col py-2 items-center justify-center">
            <h2 className="text-lg"> {item.title} </h2>
            <p className="font-extrabold text-lg"> ${item.price.toFixed(2)} </p>
        </div>
    </Link>
  )
}

export default ProductCard
