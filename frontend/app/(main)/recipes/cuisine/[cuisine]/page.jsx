"use client"

import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import {useParams} from "next/navigation"


export default function CuisineRecipesPage() {
    const params = useParams();
    const category = params.category;
    
    return (
        <RecipeGrid
          type="cuisine"
          value={cuisine}
          fetchAction={getMealsByArea}
          backLink="/dashboard"
        />
    );
}