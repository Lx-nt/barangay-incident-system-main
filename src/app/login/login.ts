import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });

    // Clear any existing user data on login page load
    this.clearUserData();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const role = this.loginForm.get('role')?.value;
      
      console.log('Login successful:', {
        username: username,
        role: role
      });
      
      // Store login info
      localStorage.setItem('currentUser', JSON.stringify({
        username: username,
        role: role,
        loggedIn: true,
        loginTime: new Date().toISOString()
      }));
      
      // Navigate to dashboard
      this.router.navigate(['/dashboard/home']);
      
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  private clearUserData() {
    // Clear any existing user data when arriving at login page
    localStorage.removeItem('currentUser');
  }
}