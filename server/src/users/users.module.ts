import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User } from "./entities/user.entity";
import { UserSchema } from "./schemas/user.schema";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: "secretsecretshhhh",
      signOptions: { expiresIn: "60s" },
    }),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, JwtService, ConfigService],
})
export class UsersModule {}
