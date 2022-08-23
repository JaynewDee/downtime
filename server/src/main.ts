import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import {} from "dotenv/config";
import * as session from "express-session";
import * as passport from "passport";
import { v4 as uuidv4 } from "uuid";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({});
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 360000,
      },
      genid: function () {
        return uuidv4();
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000, () => {
    console.log(`~SERVER~ LISTENING @ 3000`);
  });
}
bootstrap();
