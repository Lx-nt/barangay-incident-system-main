import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  // 🔵 ADD THESE (to fix showPassword/showConfirm)
  showPassword = false;
  showConfirm = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // 🔵 PASSWORD MATCH VALIDATION
  passwordMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirm')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  // 🔵 REGISTER FUNCTION
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('User Registered:', this.registerForm.value);
      this.router.navigate(['/login']);  // redirect to login after register
    }
  }

  // 🔵 FIX: MUST MATCH HTML → goToLogin()
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
