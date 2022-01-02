import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppUnless]'
})
export class AppUnlessDirective {
   @Input('appAppUnless') set appAppUnless(condition:boolean)
   {
      if(!condition)
      {
            this.vcref.createEmbeddedView(this.templateRef);
      }
      else{
        this.vcref.clear();
      }
   }
  constructor(private templateRef:TemplateRef<any>,private vcref:ViewContainerRef) { }

}
