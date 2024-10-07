"use client"
import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1)
        }
    };

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    };
    return(
        <div className= "w-40 flex items-center bg-white flex-col">
            <h1 className= "text-black font-bold">{quantity}</h1>
            <button disabled={quantity === 20} onClick= {increment} className="w-40 bg-blue-500 active:bg-white text-black font-bold py-2 px-4 rounded-full disabled:bg-gray-400 border-2 border-black">increase +</button>
            <button disabled={quantity === 1} onClick= {decrement} className="w-40 bg-white active:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full disabled:bg-gray-400 border-2 border-black">decrease -</button>
        </div>
    );
}