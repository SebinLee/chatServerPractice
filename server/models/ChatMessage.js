import mongoose from 'mongoose'

const chatMessageSchema = new mongoose.Schema(
    {
        _id: String,
        chatRoomId : String,
        message : String,
        postUserId : String,
    },
    {
        timestamps : true,
        collection : "chatmessages"
    }
)

export default mongoose.model("ChatMessage", chatMessageSchema)