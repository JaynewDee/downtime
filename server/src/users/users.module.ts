import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { CronService } from "src/common/cron/cron.service";
import { DomainsModule } from "src/domains/domains.module";
import { DomainsService } from "src/domains/domains.service";
import { Domain } from "domain";
import { DomainSchema } from "src/domains/schemas/domain.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Domain.name, schema: DomainSchema }]),
    AuthModule,
    DomainsModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    JwtService,
    ConfigService,
    CronService,
    DomainsService,
  ],
})
export class UsersModule {}
