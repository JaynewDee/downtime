import { Body, Injectable } from "@nestjs/common";
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

  async create(createUserDto: CreateUserDto) {
    const created = await this.userModel
      .create(createUserDto)
      .then((data) => data)
      .catch((err) => {
        if (err.code === 11000) {
          return false;
        }
      });
    console.log(created);
    return created;
  }

  async login(loginUserDto: LoginUserDto) {
    return await this.userModel
      .findOne({ email: loginUserDto.email })
      .then(async (res) => {
        return await this.authService.checkHash(
          loginUserDto.password,
          res.password
        );
      })
      .then((data) => {
        if (data === true) {
          return loginUserDto.email;
        }
        return false;
      });
  }
  findAll() {
    return this.userModel.find().exec();
  }

  findOne(email: string) {
    return this.userModel.findOne({ email: email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
