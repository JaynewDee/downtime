import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { DomainsService } from "src/domains/domains.service";
import { AddDomainDto } from "src/domains/dto/add-domain.dto";
import { GetDomainsDto } from "src/domains/dto/get-domains.dto";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private domainsService: DomainsService
  ) {}

  @Get()
  async getAllUsers(@Res() res) {
    if (res.ok) {
      return `Root server response: HEALTHY`;
    }
    return `Root server response: ERROR`;
  }

  @HttpCode(200)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    if (loginUserDto === undefined) {
      return { message: "Request body is undefined" };
    }
    const authenticated = await this.usersService.login(loginUserDto);
    return authenticated;
  }

  @HttpCode(201)
  @Post("signup")
  async create(@Body() createUserDto: CreateUserDto) {
    const isValidated = await this.usersService.create(createUserDto);
    if (isValidated) {
      return await this.login({
        email: createUserDto.email,
        password: createUserDto.password,
      })
        .then((token) => token)
        .catch((err) => console.error(err));
    }
  }

  @Get("all-domains")
  async getDomains(@Res() res) {
    const allDomains = await this.domainsService.getAllDomains();
    res.json(allDomains);
    return allDomains;
  }

  @Patch("domain")
  async addDomain(@Body() addDomainDto: AddDomainDto) {
    const newDomain = await this.domainsService.addDomain(addDomainDto);
    console.log(newDomain);
    return newDomain;
  }

  @Get(":email")
  findOne(@Param("email") email: string) {
    return this.usersService.findOne(email);
  }
}
