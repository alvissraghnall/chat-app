import mongoose from "mongoose";
import { connectDB } from "../../../util/db/connect";
import userSchema from "../../../util/db/user-schema";


const handler = async (req, res) => {
    const {userId } = req.query;
    switch (req.method) {
        case "GET":
            try {
                const model = mongoose.models.users || mongoose.model("users", userSchema)
                const user = await model.findById(userId);
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