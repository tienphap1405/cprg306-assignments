import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="bg-zinc-300">
            <h1 className="font-extrabold text-4xl drop-shadow-xl text-black bg-slate-50 border-black border-b-2">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    );
}