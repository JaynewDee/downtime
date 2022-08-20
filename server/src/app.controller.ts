import { Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";

@Controller("/")
export class AppController {
  constructor(private authService: AuthService) {}

  // @Get("*")
  // getWild() {
  //   return "WILDCARD ROUTE";
  // }
  @Get()
  sayHello() {
    return this.authService.login({
      chosenName: "Joshua",
      email: "jdiehl2236@yahoo.com",
      password: "willywonka",
    });
  }
}
