import Room from "../../../model/ChatRoom";
import { connectDB } from "../../../util/db/connect";

const handler = async function (req, res) {
    if(req.method === "GET") {
        try {
            const chats = await Room.find({
                members: { $in: [req.query.userId] }
            });
            return res.status(200).json(chats);
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    } else {
        return res.status(422).json({
            message: "Method not supported!"
        });
    }
}

export default connectDB(handler);