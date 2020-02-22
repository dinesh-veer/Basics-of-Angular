import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangeTextDirective {

  constructor(private element: ElementRef) {
    console.log("called custom directive");
    element.nativeElement.innerText="This text is changed due to custom directive";
   }

   @HostListener("mouseenter") onMouseEnter(){
     this.highLightColor('yellow');
   }

   @HostListener("mouseleave") onMouseLeave(){
     this.highLightColor('white');
   }

   private highLightColor(color:string){
    this.element.nativeElement.style.backgroundColor=color;
   }
}
