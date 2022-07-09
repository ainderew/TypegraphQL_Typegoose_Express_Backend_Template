import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Example {
  @Field(() => String)
  _id: string 

  @Field(() => String)
  @prop({required: true})
  name: string;
}