import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { Request } from "express";
import { UpdateAuthDto } from "./dto/update-auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async findAll(@Req() request: Request) {
    console.log("GET request to /auth RECEIVED");
    console.log(request);
    return this.authService.findAll();
  }

  @Get(":username")
  async findOne(@Param("username") username: string) {
    console.log(username);
    console.log("GET request to /auth/:username RECEIVED");
  }

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Put(":username")
  async update(
    @Param("username") username: string,
    @Body() updateAuthDto: UpdateAuthDto
  ) {
    return `This action updates a ${username} user`;
  }

  @Delete(":username")
  async remove(@Param("username") username: string) {
    return `This action remove a ${username} user`;
  }
}
