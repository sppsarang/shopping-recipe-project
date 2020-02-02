import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[appdropdown]'
})
export class DropdownDirective{
    
    @HostBinding('class.show') openDropDown = true;

    @HostListener('click')
    onHover(){
        this.openDropDown = !this.openDropDown;
    }

}