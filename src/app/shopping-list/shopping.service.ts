import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService{   
    private ingredients : Ingredient[] = [
        new Ingredient("Tomato",4),
        new Ingredient("Garlic",1)
    ]

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    addNewIngredientToList(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    getIngredients(){
        return this.ingredients.slice();
    }
}