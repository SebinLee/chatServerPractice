import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { ChatMessage } from "./ChatMessage";

export enum ChatRoomType {
    dm = "dmChat",
    group = "groupChat",
}

@ObjectType()
export class ChatRoom {
    @Field((type) => ID, { nullable: true })
    _id?: string;

    @prop()
    @Field((type) => ChatRoomType)
    public chatRoomType: ChatRoomType;

    @prop()
    @Field((type) => [Number])
    public enrolledUserId: number[];

    @prop({ ref: ChatMessage })
    @Field((type) => [ChatMessage], { nullable: true })
    public message: Ref<ChatMessage>[];
}

export const ChatRoomModel = getModelForClass(ChatRoom);
