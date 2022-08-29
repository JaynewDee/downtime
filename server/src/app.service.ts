import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getRoot(): string {
    return "Root URL";
  }
  phoneHome(): string {
    return "I was a seed ...";
  }
}
