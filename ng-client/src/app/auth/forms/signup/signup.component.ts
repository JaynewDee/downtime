import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  @Input()
  chosenName: string = '';
  @Input()
  email: string = '';
  @Input()
  password: string = '';
  ngOnInit(): void {}

  async onSubmit() {
    await this.authService
      .signup({
        chosenName: this.chosenName || 'Anonymous',
        email: this.email,
        password: this.password,
      })
      .then(() => {
        this.router.navigate([`users/monitor`]);
        this.resetFields();
      });
  }

  resetFields() {
    this.chosenName = '';
    this.email = '';
    this.password = '';
  }
}
