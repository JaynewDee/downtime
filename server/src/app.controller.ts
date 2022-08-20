import { Controller, Request, Post, UseGuards, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { UsersService } from "./users/users.service";

@Controller("/")
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getRoot();
  }
}
