// import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   constructor(private elRef: ElementRef) {}
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('document:click',['$event']) toggleOpen(event: Event) {
//     //console.log(event.target);
//     console.log(this.elRef.nativeElement);
//     console.log(this.elRef.nativeElement.contains(event.target));
//     this.isOpen = !this.isOpen;
//   }
// }



import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log(this.elRef.nativeElement);
    console.log(event.target);
    console.log(this.elRef.nativeElement.contains(event.target));
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}