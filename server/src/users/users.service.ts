import { ConsoleLogger, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { CreateUserDTO } from "./dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await this.userModel.create(createUserDTO);
    console.log(newUser);
    return newUser.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
