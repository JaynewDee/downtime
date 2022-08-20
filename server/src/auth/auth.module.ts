import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { User, UserSchema } from "src/users/schemas/user.schema";
import { AuthService } from "./auth.service";
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: "jwt",
      property: "",
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, JwtService],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
