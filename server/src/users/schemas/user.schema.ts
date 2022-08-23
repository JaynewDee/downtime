import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as bcrypt from "bcrypt";
import { Domain } from "src/domains/schemas/domain.schema";
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  chosenName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({})
  domains: [Domain];
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export { UserSchema };
