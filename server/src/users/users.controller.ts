import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { MongooseError } from "mongoose";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  async create(@Body() createUserDto: CreateUserDto) {
    const isValidated = await this.usersService.create(createUserDto);
    return isValidated;
  }
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.usersService.login(loginUserDto);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.usersService.findOne(email);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
