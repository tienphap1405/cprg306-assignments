"use client";

import Item from "./item";
import itemJson from "./items.json"
import { useState } from "react";
export default function ItemList(){
  const [sortBy, setSortBy] = useState("name");
  let itemlist = [...itemJson];

  if (sortBy === "category") {
    itemlist.sort((a, b) => a.category.localeCompare(b.category));
  } 
  else if (sortBy === "name") {
    itemlist.sort((a, b) => a.name.localeCompare(b.name));
  }
    return(
        <main>
            <div className="flex flex-row m-2">
                <p className="m-2 text-black bg-white max-w-sm border-black border-2">Sort By:</p>
                <button className={`mr-2 text-black bg-white max-w-sm border-black border-2 rounded-lg w-36 hover:bg-sky-700 hover:text-white ${sortBy === "category" ? "bg-sky-700 text-white" : "bg-white text-black"}`} onClick={() => setSortBy("category")}>
                    Category
                </button>
                <button className={`mr-2 text-black bg-white max-w-sm border-black border-2 rounded-lg w-36 hover:bg-sky-700 hover:text-white ${sortBy === "name" ? "bg-sky-700 text-white" : "bg-white text-black"}`} onClick={() => setSortBy("name")}>
                    Name
                </button>
            </div>

            <div>
                <ul>
                    {itemlist.map( (item) => (
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