import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  app.enableCors();
  await app.listen(3000, () => {
    console.log(`~SERVER~ LISTENING @ 3000`);
  });
}
bootstrap();
