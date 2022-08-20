import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";

type User = {
  chosenName: string;
  email: string;
  password: string;
};
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {}

  async login(user: User) {
    return console.log("HELLO");
  }

  async signup(user: User) {
    console.log(user);
    return this.usersService.createUser(user);
  }
}
