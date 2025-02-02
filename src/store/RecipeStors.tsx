import { makeAutoObservable } from "mobx";

import axios from "axios";
import { Recipe } from "../mpdels/models";

class RecipeStore {
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this);
         this.getRecipes(); // קריאה לפונקציה בעת יצירת ה-Store
    }

    // פונקציה לקבלת המתכונים
  
    getRecipes = async () => {
        try {
            const res = await axios.get('http://localhost:8787/api/recipes/');
            console.log(res);
            this.recipes = res.data; // עדכון המצב עם המתכונים שהתקבלו
        } catch (e) {
            console.log(e);
        }
    };
        // פונקציה שמעדכנת את המתכונים
    setRecipes = (recipes: Recipe[]) => {
        this.recipes = recipes;
    };
}

const recipeStore = new RecipeStore();
export default recipeStore;

