import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ChatMessage {
    @prop()
    @Field((type) => String)
    public chatRoomId: string;

    @prop()
    @Field((type) => Number)
    public postUserId: number;

    @prop()
    @Field((type) => String)
    public message: string;
}

export const ChatMessageModel = getModelForClass(ChatMessage);
