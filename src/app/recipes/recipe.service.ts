import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    private recipeList : Recipe[]  = [
        new Recipe(0,"Chicken Burger", 
        "Tasty Chicken Burger.", 
        "https://curtisgallon.com/wp-content/uploads/2014/02/pulled-chicken-burger-l-chips-good-light-1-2.jpg",
        [
            new Ingredient("Chicken" , 1),
            new Ingredient("Buns" , 1)
        ]),
        new Recipe(1,"Butter Chicken", 
        "Tasty Butter Chicken.", 
        "https://www.recipeselected.com/wp-content/uploads/2018/09/Recipes-Selected-Butter_Chicken.jpg",
        [
            new Ingredient("Chicken" , 1),
            new Ingredient("Butter" , 1)
        ])
      ];

    @Output() recipeSelected =  new EventEmitter<Recipe>();

    getRecipeList(){
        return this.recipeList.slice();
    }

    getRecipeById(id:number){
        return this.recipeList[id];
    }
}