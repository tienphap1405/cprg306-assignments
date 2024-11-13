export default function Item({name, quantity, category, onSelect}){
    return(
        <ul onClick={() => onSelect({ name, quantity, category})} className="text-black bg-white p-2 m-4 drop-shadow-xl max-w-sm border-black border-2">
            <li className="font-bold text-2xl ">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}