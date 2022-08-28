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
import { CreateDomainDto } from "src/domains/dto/create-domain.dto";
import { GetDomainsDto } from "src/domains/dto/get-domains.dto";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private domainsService: DomainsService
  ) {}

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @HttpCode(200)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const authenticated = await this.usersService.login(loginUserDto);
    return authenticated;
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

  @Get("all-domains")
  async getDomains(@Body() getDomainsDto: GetDomainsDto) {
    const allDomains = await this.domainsService.getAllDomains();
    return allDomains;
  }

  @Post("domain")
  async addDomain(
    @Body() updateUserDto: UpdateUserDto,
    createDomainDto: CreateDomainDto
  ) {
    const newDomain = await this.domainsService.addDomain(
      updateUserDto,
      createDomainDto
    );
    console.log(newDomain);
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
