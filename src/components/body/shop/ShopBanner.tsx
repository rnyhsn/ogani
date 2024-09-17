import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const ShopBanner = () => {
  return (
    <div className="h-[150px] flex items-center justify-center text-white flex-col gap-4" style={{backgroundImage: "url('/breadcrumb.jpg')", backgroundSize: "cover"}}>
        <h1 className="text-5xl font-extrabold">Organi Shop</h1>
        <p className="flex items-center gap-2 text-lg"> <Link href="/" className="font-extrabold cursor-pointer">Home</Link>  <MdKeyboardDoubleArrowRight />  Shop</p>
    </div>
  )
}

export default ShopBanner
