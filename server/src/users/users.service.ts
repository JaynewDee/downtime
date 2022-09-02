import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthService } from "src/auth/auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  users: any[];
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService
  ) {
    this.users = [];
  }

  async findAll() {
    const allUsers = await this.userModel.find().exec();
    this.users = allUsers;
    return allUsers;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({ email: loginUserDto.email });
    const token = await this.authService
      .checkHash(loginUserDto.password, user.password)
      .then(async (res) => {
        if (res) {
          return await this.authService.signToken(user);
        } else {
          return "UNAUTHORIZED";
        }
      })
      .catch((err) => err);
    return { user: { user, token } };
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userModel
      .create(createUserDto)
      .then((data) => data)
      .catch((err) => {
        if (err.code === 11000) {
          return false;
        }
      });
  }

  async populateUserDomains({ email }) {
    return await this.userModel.findOne({ email });
  }

  findOne(email: string) {
    return this.userModel.findOne({ email: email });
  }
}
