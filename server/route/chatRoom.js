import express from 'express'
import chatRoomController from '../controller/chatRoomController'

// Add express router
const router = express.Router()
router
    .get('/',chatRoom.getConversationByRoomId)
    .post('/initiate/:roomType', chatRoom.initateRoom)
    .post('/:roomId/join', chatRoom.joinRoom)
    .post('/:roomId/message', chatRoom.postMessage)
    .post('/:roomId/leave', chatRoom.leaveRoom)

export default router