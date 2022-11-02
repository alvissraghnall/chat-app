import mongoose from "mongoose"; 

const chatRoomSchema = new mongoose.Schema({
    members: Array
}, {
    timestamps: true
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

export default ChatRoom;