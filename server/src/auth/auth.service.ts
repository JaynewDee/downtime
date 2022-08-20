import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor() {}

  async checkHash(plaintext, hash) {
    const isValid = await bcrypt.compare(plaintext, hash);
    return isValid;
  }
}
