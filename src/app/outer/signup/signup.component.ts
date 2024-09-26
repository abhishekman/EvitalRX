import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const userData = {
        mobileNumber: this.signupForm.value.mobileNumber,
        password: this.signupForm.value.password,
      };

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(userData));

      alert('Signup successful!');
      // Redirect to sign-in page
      this.router.navigate(['/outer/login']);
    }
  }

  onCancel() {
    this.signupForm.reset();
  }
}