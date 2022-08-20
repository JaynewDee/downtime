import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { MongooseModule } from "@nestjs/mongoose";
import { RequestLogger } from "./common/middleware/logger.middleware";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { UsersService } from "./users/users.service";
import { User, UserSchema } from "./users/schemas/user.schema";
import { AuthModule } from "./auth/auth.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth/auth.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, UsersService, JwtService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLogger).forRoutes(AppController);
  }
}
