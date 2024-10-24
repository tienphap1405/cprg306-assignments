"use client";
import Item from "./item";
import ItemData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";

export default function Page(){
    const [items, setItem] = useState(ItemData);

    const handleAddItem = (newitems) => {
        setItem([...items, newitems])
    }
    return(
        <main className="bg-zinc-300">
            <h1 className="font-extrabold text-4xl drop-shadow-xl text-black bg-slate-50 border-black border-b-2">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}></NewItem>
            <ItemList ItemData = {items}></ItemList>
        </main>
    );
}