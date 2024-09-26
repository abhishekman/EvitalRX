import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mobileNumber: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      ],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const storedUser = localStorage.getItem('user'); // Get the user data stored during signup
      if (storedUser) {
        const user = JSON.parse(storedUser); // Parse the stored user data
        const { mobileNumber, password } = this.loginForm.value;

        // Check if the input matches the stored user data
        if (user.mobileNumber === mobileNumber && user.password === password) {
          // If credentials match, store a mock token and navigate to home
          localStorage.setItem('token', 'some-generated-token'); // Store a token or identifier
          
          alert('Login successful!');
          this.router.navigate(['/admin/admin-outer']); // Navigate to the protected home route
        } else {
          alert('Invalid mobile number or password');
        }
      } else {
        alert('No user found, please sign up');
      }
    }
  }
}
