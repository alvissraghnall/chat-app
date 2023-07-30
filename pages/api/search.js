import { getServerSession } from 'next-auth';
import ChatRoom from '../../model/ChatRoom'; // Assuming you have the ChatRoom model defined
import User from '../../model/User'; // Assuming you have the User model defined
import { NextAuthOptions } from './auth/[...nextauth]';
import { connectDB } from '../../util/db/connect';

async function handler(req, res) {
    const { query } = req.query;
    const session = await getServerSession(req, res, NextAuthOptions);

    if (!session) {
        return res.status(401).json({
            message: "You must be logged in!"
        })
    }
    console.log(session);

    if (!query) {
        return res.status(400).json({ error: 'Search query is required.' });
    }

    switch (req.method) {
        case "GET":

        try {
            console.log("in");
            // Search for chat rooms
            const chatRooms = await ChatRoom.find({
                chatName: { $regex: query, $options: 'i' } , // Case-insensitive search on chatName
            }).limit(5).populate('members');
            console.log(chatRooms);

            // Search for users
            const users = await User.find({ name: { $regex: query, $options: 'i' } }) // Case-insensitive search on username
                .limit(5);

            return res.status(200).json({ chatRooms, users });
        } catch (error) {
            console.error('Error searching:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        default:
            return res.status(422).json({
                message: "Method not supported!"
            })
    }
}

export default connectDB(handler);