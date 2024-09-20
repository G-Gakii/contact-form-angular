import { query } from '@angular/animations';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, SuccessComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formsubmit = false;
  contactForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    querytype: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    consent: new FormControl(false, [Validators.requiredTrue]),
  });

  submit() {
    if (this.contactForm.valid) {
      this.formsubmit = true;
      this.contactForm.reset({
        firstname: '',
        lastname: '',
        email: '',
        querytype: '',
        message: '',
        consent: false,
      });
      
    } else {
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    Object.keys(this.contactForm.controls).forEach(
      (controlName: string | number) => {
        const control = this.contactForm.controls[controlName];
        control.markAllAsTouched();
      }
    );
  }
}
