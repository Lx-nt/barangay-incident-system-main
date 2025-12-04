import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // SIMPLE ADMIN CREDENTIAL (CHANGE THIS ANYTIME)
      if (username === 'admin' && password === 'admin123') {

        // store admin session
        localStorage.setItem('adminUser', JSON.stringify({
          username,
          role: 'admin',
          loggedIn: true
        }));

        // 🔥 ROUTE TO DASHBOARD AFTER SUCCESS LOGIN
        this.router.navigate(['/dashboard/home']);
      } 
      else {
        alert('Invalid admin credentials');
      }
    }
  }
}
