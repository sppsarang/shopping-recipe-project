import { Component, OnInit , Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  item: Recipe;
  openDropDownFlag : boolean = false;
  id : number ;
  

  constructor(private shoppingService : ShoppingService,
    private recipeService : RecipeService, private route : ActivatedRoute) {
  }

  ngOnInit() {
//    this.recipeService.recipeSelected.subscribe(
//      (recipe : Recipe) => {
//        this.item = recipe;
//      }
//    );
    this.id = +this.route.snapshot.params['id'];
    

    this.route.params.subscribe(
      (params : Params)=>{
        this.item = this.recipeService.getRecipeById(+params['id']);
      }
    );

    console.log(this.id);
  }

  openDropDown(){
    this.openDropDownFlag = !this.openDropDownFlag
  }

  addToShoppingList(){
    this.item.ingredients.forEach(ingredient => 
      this.shoppingService.addNewIngredientToList(ingredient));
  }

}
