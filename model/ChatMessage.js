import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    room: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "ChatRoom"
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ChatMessage = mongoose.models.ChatMessage || mongoose.model("ChatMessage", chatMessageSchema);

export default ChatMessage;