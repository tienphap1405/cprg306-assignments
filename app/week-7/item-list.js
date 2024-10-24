"use client";

import Item from "./item";
import { useState } from "react";


export default function ItemList({ItemData}){
  const [sortBy, setSortBy] = useState("name");
  

  if (sortBy === "category") {
    ItemData.sort((a, b) => a.category.localeCompare(b.category));
  } 
  else if (sortBy === "name") {
    ItemData.sort((a, b) => a.name.localeCompare(b.name));
  }
    return(
        <main>
            <div className="flex flex-row m-2">
                <p className="m-2 text-black bg-white max-w-sm border-black border-2">Sort By:</p>
                <button
                    className={`mr-2 p-2 border-2 border-black rounded-lg w-36
                        ${sortBy === "category" ? "bg-sky-700 text-white" : "bg-white text-black"} 
                        hover:bg-sky-700 hover:text-white`}
                    onClick={() => setSortBy("category")}
                    >
                    Category
                </button>
                <button
                    className={`mr-2 p-2 border-2 border-black rounded-lg w-36
                        ${sortBy === "name" ? "bg-sky-700 text-white" : "bg-white text-black"} 
                        hover:bg-sky-700 hover:text-white`}
                    onClick={() => setSortBy("name")}
                    >
                    Name
                </button>
            </div>

            <div>
                <ul>
                    {ItemData.map( (item) => (
                        <Item
                            id = {item.id}
                            name = {item.name}
                            quantity = {item.quantity}
                            category = {item.category} 
                        />
                            
                    ))}
                </ul>
            </div>
        </main>
    );
}