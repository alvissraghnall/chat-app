import mongoose from "mongoose"; 
import BadRequestError from "../util/errors/BadRequestError";
import User from "./User";
// import { getServerSession } from "next-auth";
// import { NextAuthOptions } from "../pages/api/auth/[...nextauth]";

const chatRoomSchema = new mongoose.Schema({
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    chatName: {
        type: String,
        unique: true
    },
    isGroupChat: { type: Boolean, default: false },
}, {
    timestamps: true
});

chatRoomSchema.post("save", (error, doc, next) => {
    console.log("Name must be unique");
    next(new BadRequestError('Chat Name already exists, please try another'));
});

chatRoomSchema.virtual('name').get(async function () {
    // const session = getServerSession(NextAuthOptions);
    if (this.chatName) {
      // If chatName is provided, use it as the chat name
      return this.chatName;
    } else {
      // If chatName is not provided, generate the chat name based on participants
      const cname = (await this.populate('members')).members.map(member => member.name).join(', ');
      return cname ? cname.slice(0, cname.length - 2) : 'Unnamed Chat';
    }
});

// const ChatRoom = mongoose.model.ChatRoom || mongoose.model("ChatRoom", chatRoomSchema);

function getModel() {
    if(mongoose.models.ChatRoom) {
        return mongoose.models.ChatRoom;
    }
    return mongoose.model("ChatRoom", chatRoomSchema);
}

export default getModel();