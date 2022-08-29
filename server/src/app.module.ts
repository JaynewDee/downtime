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
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth/auth.service";
import { CronService } from "./common/cron/cron.service";
import { UsersController } from "./users/users.controller";
import { DomainsService } from "./domains/domains.service";
import { DomainsModule } from "./domains/domains.module";
import { Domain, DomainSchema } from "./domains/schemas/domain.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Domain.name, schema: DomainSchema },
    ]),
    ScheduleModule.forRoot(),
    UsersModule,
    AuthModule,
    JwtModule.register({ secret: process.env.JWT_KEY }),
    DomainsModule,
  ],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    ConfigService,
    UsersService,
    AuthService,
    CronService,
    DomainsService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLogger).forRoutes(AppController, UsersController);
  }
}
