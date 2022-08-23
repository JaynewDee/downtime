import { Injectable, Req } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async checkHash(plaintext, hash) {
    const isValid = await bcrypt.compare(plaintext, hash);
    console.log(`Hash is valid: ` + isValid);
    return isValid;
  }

  async signToken(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
