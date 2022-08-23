import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Cron, SchedulerRegistry } from "@nestjs/schedule";

@Injectable()
export class CronService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}
  @Cron("0 13 * * * *", {
    name: "monitoring",
  })
  async fireCron() {
    console.log(`Cron Log Fired : | 13th minute every hour |`);
    const logJob = this.schedulerRegistry.getCronJob("monitoring");
    const domainStatus = await axios
      .get(`http://syntheticrain.net/`)
      .then((res) => {
        return {
          status: res.status,
          text: res.statusText,
        };
      });
    console.log(logJob.lastDate());
    console.log("-----------------------");
    return domainStatus;
  }
}
