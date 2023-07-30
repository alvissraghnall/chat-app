import { getServerSession } from "next-auth";
import { NextAuthOptions } from "./auth/[...nextauth]";
import Room from "../../model/ChatRoom";
import { connectDB } from "../../util/db/connect";
import User from "../../model/User";
import BadRequestError from "../../util/errors/BadRequestError";

const getUserNames = async (members, model) => {
    if(members.length === 2) {
        return null;
    }
    // let roomName = "";
    let user = {};

    for(let i = 0; i < members.length; i++) {
        user = await model.findById(members[i]).exec();
        let username = new Promise((res, rej) => res(user.name + ", "));
        // roomName += await username;
    }

    // // return roomName.slice(0, roomName.length - 2);
}

const handler = async (req, res) => {

    const session = await getServerSession(req, res, NextAuthOptions);
    
    if (!session) {
        return res.status(401).json({
            message: "You must be logged in!"
        })
    }

    switch (req.method) {
        case "POST":
            const members = [...req.body.members ];
            const chatName = req.body.chatName;
            let isGroupChat;

            if(members.length > 2) {
                if (!chatName) {
                    return res.status(422).json({
                        message: "chat name must be provided for group chat!"
                    })
                };
                isGroupChat = true;
            }
            
            // const roomName = await getUserNames(members, User);
            try {
                
                const newChat = new Room({
                    members,
                    chatName,
                    isGroupChat
                });
                console.log(newChat);
                const savedChat = await newChat.save();
                return res.status(201).json(savedChat);

            } catch (error) {
                if (error instanceof BadRequestError) {
                    return res.status(error.code).json({
                        message: error.message
                    })
                }
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