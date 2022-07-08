import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true}]
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenName!: string;
  constructor() { }

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.value.includes(this.forbiddenName)) return { forbiddenName: {value: control.value}}
    else return null
  }

}
