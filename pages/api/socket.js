import { Server } from "socket.io";
import messageHandler from "../../util/sockets/message-handler";

export default function socketHandler(req, res) {

    let activeUsers = [];

    if (res.socket.server.io) {
        console.log("Server already up and running.");
        console.log(activeUsers);;
        return res.end();
    }

    const io = new Server(res.socket.server);

    // const onConnection = socket => {
    //     messageHandler(io, socket);
    // }

    console.log("one");
    io.on("connection", socket => {
        socket.broadcast.emit("conn");
        socket.on("new-user", newUserId => {
            if(!activeUsers.some(user => user.id === newUserId)){
                activeUsers.push({
                    id: newUserId,
                    socketId: socket.id
                });
                console.log("func")

            }

            console.log("connected users: ", activeUsers);
            io.emit("get-users", activeUsers);
        });
        console.log("connected users: ", activeUsers);

        socket.on("--x", () => {
            console.log("--x"); 
        })

        socket.on("disconnect", () => {
            activeUsers = activeUsers.filter(user => user.socketId !== socket.id);
            console.log("User disconnected!");
            io.emit("get-users", activeUsers);
        });
    });
    res.socket.server.io = io;


    console.log("Setting up socket..;.");
    res.end();
}