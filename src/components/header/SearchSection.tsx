import { IoIosArrowDown } from "react-icons/io";


const SearchSection = () => {
  return (
    <div className="flex items-center border border-gray-200 h-full">
      <div className="flex items-center px-3 gap-2 w-60 flex-1">
         <span className="font-extrabold w-24"> All Categories </span>
         <IoIosArrowDown />
      </div>
      <div className="h-5 border-l border-gray-300"></div>
      <div className="h-full flex w-full">
        <input type="text" placeholder="What do you need?" className="flex-1 px-4 outline-none" />
        <button className="px-5 h-full text-white bg-primary uppercase font-bold"> Search </button>
      </div>
    </div>
  )
}

export default SearchSection
