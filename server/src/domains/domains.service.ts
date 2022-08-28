import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios, { Axios, AxiosStatic } from "axios";
import { Domain, DomainDocument } from "./schemas/domain.schema";
import { UsersService } from "src/users/users.service";
import { Model } from "mongoose";
import { GetDomainsDto } from "./dto/get-domains.dto";
import { CreateDomainDto } from "./dto/create-domain.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";

@Injectable()
export class DomainsService {
  userDomains: [] | [Domain] = [];
  base: string;

  constructor(
    @InjectModel(Domain.name) private domainModel: Model<DomainDocument>
  ) {
    this.base = process.env.SERVER_BASE;
  }
  async getAllDomains() {
    const allDomains = await this.domainModel.find();
    return allDomains;
  }
  async addDomain(
    updateUserDto: UpdateUserDto,
    createDomainDto: CreateDomainDto
  ) {
    const newDomain = await this.domainModel.create({
      url: createDomainDto.url,
      created: new Date(),
      active: true,
    });
    newDomain.save();
    const userToUpdate = await this.domainModel.find({
      email: updateUserDto.userEmail,
    });
  }
}
