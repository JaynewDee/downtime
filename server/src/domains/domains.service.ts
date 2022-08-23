import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios, { Axios, AxiosStatic } from "axios";
import { Domain, DomainDocument } from "./schemas/domain.schema";
import { UsersService } from "src/users/users.service";
import { Model } from "mongoose";
import { GetDomainsDto } from "./dto/get-domains.dto";
import { CreateDomainDto } from "./dto/create-domain.dto";

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
  async addDomain(createDomainDto: CreateDomainDto) {
    const newDomain = await this.domainModel.create({
      url: createDomainDto.url,
      created: new Date(),
    });
    newDomain.save();
  }
}
