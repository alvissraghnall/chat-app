import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    from: {
        type: mongoose.types.ObjectId,
        required: true
    },
    to: {
        type: mongoose.types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;