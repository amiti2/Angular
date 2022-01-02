import { Directive, ElementRef, HostBinding, HostListener,Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open')  isOpen: boolean =false;


    @HostListener('click') menuclick()
    {
        this.isOpen = !this.isOpen;
        // console.log(this.el.nativeElement.className.includes('open'));
        //   if(this.el.nativeElement.className.includes('open'))
        //   {
        //     this.rendered.removeClass(this.el.nativeElement,'open');
        //   }
        //   else
        //   {
        //     this.rendered.addClass(this.el.nativeElement,'open');
        //   }
    } 
    constructor(private el:ElementRef,private rendered:Renderer2)
    {
        
    }
}