import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";
import { Cron, SchedulerRegistry } from "@nestjs/schedule";

@Injectable()
export class CronService {
  private readonly cronLogger = new Logger(CronService.name);
  constructor(private schedulerRegistry: SchedulerRegistry) {}
  @Cron("0 13 * * * *", {
    name: "debugger",
  })
  async fireCron() {
    console.log(`Cron Log Fired : | 13th minute every hour |`);
    const logJob = this.schedulerRegistry.getCronJob("debugger");
    const domainStatus = await axios
      .get(`http://syntheticrain.net/`)
      .then((res) => console.log(res.status, res.statusText));
    console.log(logJob.lastDate());
    console.log("-----------------------");
  }
}
