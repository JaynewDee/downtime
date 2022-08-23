import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Session,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { CronService } from "src/common/cron/cron.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private cronService: CronService
  ) {}

  @Get()
  async getAllUsers(@Session() session: Record<string, any>) {
    return this.usersService.findAll();
  }

  @HttpCode(200)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const isValid = await this.usersService.login(loginUserDto);
    return isValid;
  }

  @HttpCode(201)
  @Post("signup")
  async create(@Body() createUserDto: CreateUserDto) {
    const isValidated = await this.usersService.create(createUserDto);
    console.log(`isValidated? ` + isValidated);
    if (isValidated) {
      return await this.login({
        email: createUserDto.email,
        password: createUserDto.password,
      })
        .then((token) => token)
        .catch((err) => console.error(err));
    }
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
