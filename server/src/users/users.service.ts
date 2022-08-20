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
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto).catch((err) => {
      if (err.code === 11000) {
        return false;
      }
    });
  }

  async login(loginUserDto: LoginUserDto) {
    const doesExist = await this.userModel
      .findOne(loginUserDto)
      .catch((err) => console.error(err));
    if (doesExist) {
      this.authService.signJwt(doesExist);
    }
    return { success: false, message: "User was not found!" };
  }
  findAll() {
    return `This action returns all users`;
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
