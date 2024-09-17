import { featuredProducts } from "@/utils/data";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ProductCard from "../home/ProductCard";
import Pagination from "./Pagination";

const OrganizedProducts = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
            <span>Sort By</span>
            <select name="" id="" className="border border-gray-300 font-extrabold py-0 w-[150px]">
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
                <option value="random">Random</option>
            </select>
        </div>
        <div>
            <span className="font-bold">20</span>
            <span className="text-gray-600"> products found</span>
        </div>
        <div className="flex gap-4 text-gray-500">
            <BsFillGridFill className="text-lg cursor-pointer" />
            <FaListUl className="text-lg cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-10">
        {
            featuredProducts.map((item, index) => (
                <ProductCard item={item} key={index} offer={false}  />
            ))
        }
      </div>
      <Pagination />
    </div>
  )
}

export default OrganizedProducts
