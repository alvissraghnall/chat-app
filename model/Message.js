import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref
    },
    to: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Message = mongoose.model("Message", messageSchema);

export default Message;