import { Controller, Request, Post, UseGuards, Get, Res } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("user")
export class UsersController {
  constructor() {}

  // @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req, @Res() res) {
    res.send();
  }

  @Get("all")
  getAllUsers(@Request() req, @Res() res) {
    console.log(req);
    console.log(res.body);
    res.send("Chicken!");
  }
}
