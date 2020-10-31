import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

enum ChatRoomType {
    dm = "dmChat",
    group = "groupChat",
}

@ObjectType()
class ChatRoom {
    @Field((type) => ID, { nullable: true })
    _id?: string;

    @prop()
    @Field((type) => ChatRoomType)
    public chatRoomType: ChatRoomType;

    @prop()
    @Field((type) => [Number])
    public enrolledUserId: [Number];
}

const ChatRoomModel = getModelForClass(ChatRoom);
