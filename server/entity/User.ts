import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field((type) => ID, { nullable: true })
    _id?: string;

    @prop()
    @Field((type) => String)
    public name: string;
}

export const UserModel = getModelForClass(User);
