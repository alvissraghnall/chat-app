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
    } else if (req.method === "DELETE") {
        try {
            // const deleted = await Room.deleteOne({
            //     // members: 
            // })
            await Room.deleteMany({
                members: { $in: ['63a3850c49c7f2fb8ada070b'] }
            })
            return res.status(200).json({
                message: "Successful!"
            });
        } catch (error) {
            console.error(err);
            return res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
    else {
        return res.status(422).json({
            message: "Method not supported!"
        });
    }
}

export default connectDB(handler);