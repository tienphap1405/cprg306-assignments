import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";


export const getItems = async(userId) => {
    try{
        const q = query(
            collection(db, "users", userId, "items")

        );
        const querySnapshot = await getDocs(q);
        
        const mappedItems = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        
        return mappedItems;
    }
    catch (error){
        console.error("Error fetching items: ", error);
        return [];
    }
}

export const addItem = async (userId, item) =>{
    try{
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);
        return docRef.id;
    }
    catch (error){
        console.error("Error trying to add item: ", error);
    }

}