import mongoose, { Schema } from 'mongoose'

// Declare ChatRoomType
export const CHAT_ROOM_TYPE = {
    DM : 'non-group-chat',
    GROUP : 'group-chat',
}

// Declare chatRoomSchema
// To see more about mongoose schema, see the documentation below
// https://mongoosejs.com/docs/guide.html
const chatRoomSchema = new Schema(
    {
        _id : {
            type : String,
            default : `${Date.now().toString}`
        },
        type : String,
        enrolledUserIds : Array,
        chatInitiaor : String
    },
    {

        timestamps : true,
        collection : 'chatroom'
    }
)

export default mongoose.model("ChatRoom", chatRoomSchema)