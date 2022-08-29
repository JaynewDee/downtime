import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios, { Axios, AxiosStatic } from "axios";
import { Domain, DomainDocument } from "./schemas/domain.schema";
import { UsersService } from "src/users/users.service";
import { Model } from "mongoose";
import { GetDomainsDto } from "./dto/get-domains.dto";
import { AddDomainDto } from "./dto/add-domain.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { User, UserDocument } from "src/users/schemas/user.schema";

@Injectable()
export class DomainsService {
  userDomains: [] | [Domain] = [];
  base: string;

  constructor(
    @InjectModel(Domain.name) private domainModel: Model<DomainDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {
    this.base = process.env.SERVER_BASE;
  }
  async getAllDomains() {
    const allDomains = await this.domainModel.find();
    return allDomains;
  }
  async addDomain(addDomainDto: AddDomainDto) {
    const newDomain = await this.domainModel.create({
      ...addDomainDto,
    });
    newDomain.save();
    const updatedUser = await this.userModel.updateOne(
      {
        email: addDomainDto.userEmail,
      },
      { domains: newDomain }
    );
    return updatedUser;
  }
}
