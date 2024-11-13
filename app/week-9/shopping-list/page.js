"use client";
import Item from "./item";
import ItemData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

function cleanItemName(itemName) {
    return itemName.split(",")[0].replace(/[^\w\s]/gi, "").trim();
  }

export default function Page(){
    const [items, setItem] = useState(ItemData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newitems) => {
        setItem([...items, newitems])
    }
    const handleItemSelect = (item) => {
        const cleanedName = cleanItemName(item.name);
        setSelectedItemName(cleanedName);
      };
      const {user} = useUserAuth();
      if (!user){
        return(
          <main>
            <h1>Your need to be signed in to view this page.</h1>
          </main>
        );
      }

      return (
        <main className="bg-zinc-300 flex flex-row gap-8 p-4">
          {/* Left Side: NewItem and ItemList */}
          <div className="flex flex-col w-1/2">
            <h1 className="font-extrabold text-4xl drop-shadow-xl text-black bg-slate-50 border-black border-b-2">
              Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList 
              ItemData={items} 
              onItemSelect={handleItemSelect} 
              selectedItem={selectedItemName} 
            />
          </div>
    
         
          <div className="flex flex-col w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </main>
      );
}