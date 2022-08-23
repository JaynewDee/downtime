import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { User, UserSchema } from "src/users/schemas/user.schema";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./guards/jwt.strategy";

@Module({
  imports: [
    PassportModule.register({
      session: true,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, JwtStrategy, JwtService],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
