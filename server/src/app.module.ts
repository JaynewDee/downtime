import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { RequestLogger } from "./common/middleware/logger.middleware";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ScheduleModule.forRoot(), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLogger).forRoutes(AppController);
  }
}
