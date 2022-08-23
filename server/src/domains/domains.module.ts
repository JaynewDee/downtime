import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Domain } from "domain";
import { DomainsService } from "./domains.service";
import { DomainSchema } from "./schemas/domain.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Domain.name, schema: DomainSchema }]),
  ],
  providers: [DomainsService],
  exports: [],
})
export class DomainsModule {}
