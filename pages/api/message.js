import ChatMessage from "../../model/ChatMessage";
import { connectDB } from "../../util/db/connect";

const handler = async (req, res) => {
    switch(req.method) {
        case "POST":
            const { sender, room, content } = req.body;
            const newMessage = new ChatMessage({
                from: sender,
                room,
                content,
            });
            try {
                const saved = await newMessage.save();
                return res.status(201).json(saved);
            } catch (error) {
                console.error(error)
                return res.status(500).json(error);
            }
    }
}

export default connectDB(handler);