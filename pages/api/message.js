import ChatMessage from "../../model/ChatMessage";
import { connectDB } from "../../util/db/connect";

const handler = async (req, res) => {
    switch(req.method) {
        case "POST":
            const { sender, receiver, room, content } = req.body;
            const newMessage = new ChatMessage({
                from: sender,
                to: receiver,
                content,
                room
            });
            try {
                const saved = await newMessage.save();
                return res.status(201).json(saved);
            } catch (error) {
                return res.status(500).json(error);
            }
    }
}

export default connectDB(handler);