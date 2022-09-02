import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getRoot() {
    return { url: "Root URL" };
  }
  phoneHome(): string {
    return "I was a seed ...";
  }
}
