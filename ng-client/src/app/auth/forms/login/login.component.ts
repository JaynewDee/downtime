import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input()
  email: string = '';
  @Input()
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    await this.authService
      .login({ email: this.email, password: this.password })
      .then(() => {
        this.router.navigate([`users/${this.email}/monitor`]);
        this.resetFields();
      });
  }

  resetFields() {
    this.email = '';
    this.password = '';
  }
}
