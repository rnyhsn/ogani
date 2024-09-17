"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    const [stars, setStars] = useState(0);
    console.log(stars);
  return (
    <div className="flex items-center gap-4">
      <div className="flex text-gray-500">
        {
            [1,2,3,4,5].map((item) => (
                <FaStar key={item} onClick={()=> setStars(item)} className={`cursor-pointer ${item <= stars && "text-orange-400"}`} />
            ))
        }
      </div>
      <div className="text-red-600 text-sm"> (20 reviews) </div>
    </div>
  )
}

export default Reviews
