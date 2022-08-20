import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  HttpCode,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthService } from "src/auth/auth.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
  ) {}

  @Post("create")
  async create(@Body() createUserDto: CreateUserDto) {
    const isValidated = await this.usersService.create(createUserDto);
    console.log(isValidated);
    return isValidated;
  }

  @HttpCode(200)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const isValidated = await this.usersService.login(loginUserDto);
    return isValidated;
  }

  @Get("all")
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
