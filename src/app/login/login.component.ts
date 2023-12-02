import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() login = new EventEmitter<{ email: string, password: string }>();
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    
  }

  get emailField():AbstractControl | null{
    return this.loginForm.get('email')
  }

  get passwordField():AbstractControl | null{
    return this.loginForm.get('password')
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.emailField?.value,
        password: this.passwordField?.value
      };

      this.authService.login(credentials).subscribe({
        next: (response: any) => {
          this.login.emit({ email: this.emailField?.value, password: this.passwordField?.value });
          console.log('Login successful:', response);
        },
        error: (error) => {
          console.error('Login error:', error?.message);
        }
      });
    }
  }
}
