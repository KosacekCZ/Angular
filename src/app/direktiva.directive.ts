import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirektiva]'
})
export class DirektivaDirective {

  constructor(
    el: ElementRef<HTMLElement>) {
    el.nativeElement.classList.add('home_container');
  }

}
