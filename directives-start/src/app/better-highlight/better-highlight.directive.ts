import { Directive, OnInit,ElementRef,Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string ='transparent';
  @Input('appBetterHighlight') highlightColor:string ='blue';

  @HostBinding('style.backgroundColor') BG : string =this.defaultColor;
  ngOnInit()
  {
    this.BG = this.defaultColor;
    
  }
  constructor(private el:ElementRef, private renderer:Renderer2) { 

  }
  @HostListener('mouseenter') mouseover(event:Event)
  {
        console.log(event);
        //this.renderer.setStyle(this.el.nativeElement,"backgroundColor","red");
        this.BG = this.highlightColor;
  } 
@HostListener('mouseleave') mouseout()
  {
    //this.renderer.setStyle(this.el.nativeElement,"backgroundColor","transparent");
    this.BG = this.defaultColor;
  } 

  // @HostListener('click') ff(eventData:Event)
  // {
  //   console.log(eventData);
  //   this.renderer.setStyle(this.el.nativeElement,"backgroundColor","transparent");
  // } 
}
