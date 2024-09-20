import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidator(
  control: AbstractControl
): ValidationErrors | null {
  const nameregex = /^[A-Za-z]+$/;
  const valid = nameregex.test(control.value);
  return valid ? null : { invalidName: true };
}
