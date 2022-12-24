import mongoose from "mongoose"; 

const chatRoomSchema = new mongoose.Schema({
    members: Array,
    name: {
        type: String
    }
}, {
    timestamps: true
});

// const ChatRoom = mongoose.model.ChatRoom || mongoose.model("ChatRoom", chatRoomSchema);

function getModel() {
    if(mongoose.models.ChatRoom) {
        return mongoose.models.ChatRoom;
    }
    return mongoose.model("ChatRoom", chatRoomSchema);
}

export default getModel();