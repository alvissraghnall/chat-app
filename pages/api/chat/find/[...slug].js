import ChatRoom from "../../../../model/ChatRoom";
import { connectDB } from "../../../../util/db/connect";


const handler = async (req, res) => {
    if (req.method === "GET") {
        const senderId = req.query["slug"][0];
        const receiverId = req.query["slug"][1];
    
        const chat = await ChatRoom.findOne({
            members: { $all: [senderId, receiverId] }
        }).catch(err => {
            return res.status(500).json(err);
        });

        return res.status(200).json(chat);

    } else {
        return res.status(422).json({
            message: "Method not supported!"
        });
    }
}

export default connectDB(handler);