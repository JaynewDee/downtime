import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/users/schemas/user.schema";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, UsersService, JwtService],
})
export class AuthModule {}
