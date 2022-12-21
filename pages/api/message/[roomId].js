import { ObjectId } from "mongodb";
import ChatMessage from "../../../model/ChatMessage";
import { connectDB } from "../../../util/db/connect";

const handler = async (req, res) => {

    if (req.method === "GET") {
        const { roomId } = req.query;
        try {
            const rexult = await ChatMessage.find({
                room: ObjectId(roomId)
            });
            return res.status(200).json(rexult);
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