import Room from "../../../model/ChatRoom";
import User from "../../../model/User";
import { connectDB } from "../../../util/db/connect";

const handler = async function (req, res) {
    switch (req.method) {
        case "POST":
            try {
                const {
                    
                } = req.body;
                return res.status(200).json(user);
            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    message: "Internal Server Error!"
                });
            }
        default:
            return res.status(422).json({
                message: "Method not supported!"
            });
    }
}


export default connectDB(handler);