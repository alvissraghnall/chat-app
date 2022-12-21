import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    to: {
        type: mongoose.Types.ObjectId,
        // required: true,
        ref: "users"
    },
    content: {
        type: String,
        required: true
    },
    room: {
        type: mongoose.Types.ObjectId,
        ref: "ChatRoom",
    }
}, {
    timestamps: true
});

const ChatMessage = mongoose.models.ChatMessage || mongoose.model("ChatMessage", chatMessageSchema);

export default ChatMessage;