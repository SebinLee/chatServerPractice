import mongoConnection from "../utils/mongoConnection";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ChatRoom, ChatRoomModel } from "../entity/ChatRoom";

@Resolver()
export class ChatResolver {
    // Query for get ChatRoom data using roomId
    @Query((type) => ChatRoom)
    public async getChatRoomById(
        @Arg("roomId") roomId: string
    ): Promise<ChatRoom> {
        return await mongoConnection().then(async (connection) => {
            const room = await ChatRoomModel.findById(roomId);
            connection.disconnect();
            return room;
        });
    }

    // Mutation for make new ChatRoom
    @Mutation((type) => ChatRoom)
    public async makeChatRoom(
        @Arg("userId") userId: number
    ): Promise<ChatRoom> {
        return await mongoConnection().then(async (connection) => {
            const newChatRoom = ChatRoomModel.create({
                chatRoomType: "dm",
                enrolledUserId: [userId],
                message: null,
            });

            connection.disconnect();
            return newChatRoom;
        });
    }

    // Mutation for enter ChatRoom using roomId
    @Mutation((type) => ChatRoom)
    public async enterRoomById(
        @Arg("roomId") roomId: string,
        @Arg("userId") userId: number
    ): Promise<ChatRoom> {
        return await mongoConnection().then(async (connection) => {
            const room = await ChatRoomModel.findByIdAndUpdate(roomId, {
                $push: { enrolledUserId: userId },
            });

            connection.disconnect();
            return room;
        });
    }
}
