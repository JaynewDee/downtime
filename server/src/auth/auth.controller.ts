import { Controller, Get, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  async sayHi() {
    return "Hello from auth/!";
  }
  @Post("signup")
  async createUser(@Request() req) {
    console.log(req.body);
    const res = await this.authService.signup(req.body);
    console.log(res);
  }
}
