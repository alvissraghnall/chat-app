import mongoose from "mongoose";
import Room from "../../model/ChatRoom";
import { connectDB } from "../../util/db/connect";
import userSchema from "../../util/db/user-schema";

const getUserNames = async (members, model) => {
    if(members.length === 2) {
        return null;
    }
    let roomName = "";
    let user = {};

    for(let i = 0; i < members.length; i++) {
        user = await model.findById(members[i]).exec();
        let username = new Promise((res, rej) => res(user.name + ", "));
        roomName += await username;
    }

    return roomName.slice(0, roomName.length - 2);
}

const handler = async (req, res) => {

    switch (req.method) {
        case "POST":
            const members = [...req.body.members ];
            const name = req.body.name;
            const model = mongoose.models.users || mongoose.model("users", userSchema)
            
            const roomName = await getUserNames(members, model);
            try {
                
                const newChat = new Room({
                    members,
                    name: name || roomName
                });
                console.log(newChat);
                const savedChat = await newChat.save();
                return res.status(201).json(savedChat);

            } catch (error) {
                return res.status(500).json({
                    message: "Internal Server Error!"
                })
            }

        default:
            return res.status(422).json({
                message: "Method not supported!"
            })
    }
}

export default connectDB(handler);