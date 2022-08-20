import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User } from "./entities/user.entity";
import { UserSchema } from "./schemas/user.schema";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtService],
})
export class UsersModule {}
