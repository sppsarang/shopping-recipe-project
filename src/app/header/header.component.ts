import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector : 'app-header' ,
    templateUrl : './header.component.html' ,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    @Output() recipeSelect = new EventEmitter<{recipeSelected:boolean , shoppingSelected : boolean}>();
    @Output() shoppingSelect = new EventEmitter<{recipeSelected:boolean , shoppingSelected : boolean}>();
    openDropDownFlag : boolean = false;


    recipeSelected(){
        this.recipeSelect.emit({recipeSelected:true , shoppingSelected : false});
    }

    shoppingSelected(){
        this.shoppingSelect.emit({recipeSelected:false , shoppingSelected : true});
    }

    openDropDown(){
        this.openDropDownFlag = !this.openDropDownFlag
    }
}