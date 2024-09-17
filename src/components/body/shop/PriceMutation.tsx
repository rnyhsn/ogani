"use client";
import { useState } from "react"


const PriceMutation = () => {
    const [increase, setIncrease] = useState(5);
  return (
    <div>
      <h1 className="text-2xl font-extrabold">Price</h1>
      <input type="range" min="5" max="300" className="bg-red-500 text-red-500" onChange={(e)=> setIncrease(parseInt(e.target.value))} />

      <div className="flex itmes-center gap-2">
        <span className="font-extrabold"> $5 </span>
        - 
        <span className="font-extrabold"> ${increase} </span>
      </div>
    </div>
  )
}

export default PriceMutation
