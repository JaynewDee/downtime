import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DomainDocument = Domain & Document;

@Schema()
export class Domain {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  url: string;

  @Prop({ required: true })
  created: Date;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);
