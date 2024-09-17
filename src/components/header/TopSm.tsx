import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const TopSm = () => {
  return (
    <div className="bg-secondary py-3 text-sm px-4 md:px-10 lg:px-20 xl:px-28 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
        <FaEnvelope />
        <span> info@localhost.com </span>
        </div>
        <div className="border-l-2 h-3 border-gray-300"></div>
        <div>Free Shipping for all Order of $99</div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
        </div>
        <div className="border-l-2 h-3 border-gray-300"></div>
        <div className="relative group cursor-pointer">
            <div className="flex items-center gap-4">
            <Image src="/language.png" alt="" width={25} height={30} />
            <div className="flex gap-2 items-center"> English  <MdKeyboardArrowDown /> </div>
            </div>
            <div className="hidden group-hover:flex flex-col gap-2 absolute z-20 bg-gray-900 text-white right-0 w-[100px] p-3 rounded-sm">
                <span> English </span>
                <span> Spalish </span>
            </div>
        </div>
        <div className="border-l-2 h-3 border-gray-300"></div>
        <div className="flex items-center gap-2 cursor-pointer">
            <FaUser /> Login
        </div>
      </div>
    </div>
  )
}

export default TopSm
