import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appAgeVer]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeVerDirective, multi: true}]
})
export class AgeVerDirective implements Validator {

  minAge!: number | string;

  constructor(private readonly el: ElementRef<HTMLElement>) {

  }

  @Input('minAge')
  set minValue(value: number | string) {
    this.minAge = value;
    this.el.nativeElement.setAttribute('min', value + '');
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value === 'number' && value < this.minAge) {
      return {min: {min: this.minAge}};
    }
    return null;
  }
}
