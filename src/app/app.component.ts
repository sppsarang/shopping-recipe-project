import { Component } from '@angular/core';
import { ShoppingService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-receipe-project';
  recipeSelected : boolean = false;
  shoppingSelected : boolean = false;
  module : string;

  onSelect(moduleSelected : {recipeSelected:boolean , shoppingSelected:boolean}){
      this.recipeSelected=moduleSelected.recipeSelected;
      this.shoppingSelected=moduleSelected.shoppingSelected;
  }
}
