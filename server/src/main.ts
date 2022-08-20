import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

import {} from "dotenv/config";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({});
  await app.listen(3000, () => {
    console.log(`~SERVER~ LISTENING @ 3000`);
  });
}
bootstrap();
