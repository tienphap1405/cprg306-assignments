"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if(!ingredient) {
            return;
        }
    
        const dataMeals = await fetchMealIdeas(ingredient);
        setMeals(dataMeals || []);
    }
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient])

    return(
        <div className="m-2 text-black bg-white max-w-sm border-black border-2">
            <div className="border-white border-2">
                <h1 className="bg-black text-white">Meal Ideas</h1>
                <h2 className="bg-black text-white">Here are some meal ideas using {ingredient}:</h2>
            </div>
            <ul>
                {meals.length === 0 && <li>No meal found for {ingredient}</li>}
                {meals.length > 0 &&
                    meals.map( (meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                        </li>
                ))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }
    catch (error){
        console.error("Error: ", error);
        return [];
    }
}