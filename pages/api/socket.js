import { Socket } from "socket.io";
import messageHandler from "../../util/sockets/message-handler";

export default function socketHandler(req, res) {
    if (res.socket.server.io) {
        console.log("Server already up and running.");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const onConnection = socket => {
        messageHandler(io, socket);
    }

    io.on("connection", onConnection);

    console.log("Setting up socket...");
    res.end();
}