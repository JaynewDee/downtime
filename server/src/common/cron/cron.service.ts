import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class CronService {
  private readonly cronLogger = new Logger(CronService.name);

  @Cron(CronExpression.EVERY_10_SECONDS)
  fireCron() {
    this.cronLogger.debug("Called every 10 seconds");
  }
}
