export default function Item(props){
    let {name, quantity, category} = props;
    return(
        <ul className="text-black bg-white p-2 m-4 drop-shadow-xl max-w-sm border-black border-2">
            <li className="font-bold text-2xl ">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}