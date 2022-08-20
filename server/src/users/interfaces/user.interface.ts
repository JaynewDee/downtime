import { Document } from "mongoose";

export interface User extends Document {
  readonly chosenName: string;
  readonly email: string;
  readonly password: string;
}
