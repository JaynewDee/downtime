import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import axios, { Axios, AxiosStatic } from "axios";
import { Domain, DomainDocument } from "./schemas/domain.schema";
import { UsersService } from "src/users/users.service";
import { Model } from "mongoose";
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

  async addDomain(createDomainDto: CreateDomainDto) {
    await this.domainModel.create(createDomainDto);
  }
}
