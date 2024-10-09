"use client"
import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [name, setName] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert(`Add item \n--Name: ${item.name}  \n--Quantity: ${item.quantity}  \n--Category: ${item.category}`)
        
        setQuantity(1);
        setCategory("produce");
        setName("");
    }

    const handleCategoryOption = (val) =>{
        setCategory(val.target.value)
    }
    const handleNameInput = (val) => {
        setName(val.target.value)
    }
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
        <main className= "flex justify-center">
            <form onSubmit={handleSubmit}  className= "p-4 m-16 bg-gray-700 w-full max-w-sm flex-col">
                <input value= {name} className="rounded-lg mb-4 w-full p-2 border-black border-2 text-black" type= "text" placeholder=" Item name" onChange= {handleNameInput} required />
                <div className="flex justify-between">
                    <div className= "rounded-lg w-36 p-2 mt-1 mb-1 flex items-center bg-white flex-col border-black border-2">
                        <h1 className= "text-black font-bold bg-black text-white rounded-full p-2 mb-1">{quantity}</h1>
                        <button type="button" disabled={quantity === 20} onClick= {increment} className="w-full mb-1 bg-blue-500 active:bg-white text-black font-bold py-2 px-4 rounded-full disabled:bg-gray-400 border-2 border-black">increase +</button>
                        <button type="button" disabled={quantity === 1} onClick= {decrement} className="w-full bg-white active:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full disabled:bg-gray-400 border-2 border-black">decrease -</button>
                    </div>
                    <select value={category} onChange= {handleCategoryOption} className= "h-10 text-black border-black border-2 ml-1 p-2 rounded-lg" >
                        <option value= {"Produce"}>Produce</option>
                        <option value= "Dairy">Dairy</option>
                        <option value= "Bakery">Bakery</option>
                        <option value= "Meat">Meat</option>
                        <option value= "Frozen Foods">Frozen Foods</option>
                        <option value= "Canned Goods">Canned Goods</option>
                        <option value= "Dry Goods">Dry Goods</option>
                        <option value= "Beverages">Beverages</option>
                        <option value= "Snacks">Snacks</option>
                        <option value= "Household">Household</option>
                        <option value= "Other">Other</option>       
                    </select>
                </div>
                <button type= "submit" className= " w-full border-2 border-black bg-blue-500 active:bg-white text-black font-bold py-2 px-4 rounded-full mt-1">Submit</button>
            </form>
        </main>
    );
}