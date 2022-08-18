import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { CreateAuthDto } from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createAuthDto: CreateAuthDto): Promise<User> {
    const createdUser = new this.userModel(createAuthDto);
    return createdUser.save();
  }
}
