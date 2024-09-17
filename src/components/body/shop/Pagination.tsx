import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const Pagination = () => {
  return (
    <div>
      <div className="flex gap-1 mt-6 mb-10">
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">
            <MdOutlineKeyboardDoubleArrowLeft />
        </div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">1</div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">2</div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">3</div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">4</div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">5</div>
        <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">
            <MdOutlineKeyboardDoubleArrowRight/>
        </div>
      </div>
    </div>
  )
}

export default Pagination
