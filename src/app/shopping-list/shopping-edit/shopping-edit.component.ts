import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameIngredient',{static:false}) nameIngredient : ElementRef ;
  @ViewChild('amountIngredient',{static:false}) amountIngredient : ElementRef;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  addIngredient(){
    this.shoppingService.addNewIngredientToList(new Ingredient(this.nameIngredient.nativeElement.value,
      this.amountIngredient.nativeElement.value));
  }

}
