import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { ChatMessage } from "./ChatMessage";

@ObjectType()
export class ChatRoom {
    @Field((type) => ID, { nullable: true })
    _id?: string;

    @prop()
    @Field((type) => String)
    public chatRoomType: "dm" | "group";

    @prop()
    @Field((type) => [Number])
    public enrolledUserId: number[];

    @prop({ ref: ChatMessage })
    @Field((type) => [ChatMessage], { nullable: true })
    public message: Ref<ChatMessage>[];
}

export const ChatRoomModel = getModelForClass(ChatRoom);
