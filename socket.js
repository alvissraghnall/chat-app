
const io = require("socket.io")(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let activeUsers = [];

console.log("front");

io.on("connection", socket => {
    console.log("in")
    socket.on("new-user", newUserId => {
        if(!activeUsers.some(user => user.id === newUserId)){
            activeUsers.push({
                id: newUserId,
                socketId: socket.id
            });
        }

        console.log("connected users: ", activeUsers);
        io.emit("get-users", activeUsers);
    });

    console.log("connected users: ", activeUsers);

    socket.on("--x", () => {
        console.log("--x"); 
    });

    socket.on("send-message", data => {
        const { receiverId } = data;
        const user = activeUsers.find(user => user.userId === receiverId);

        console.log("Sending from socket to: " + receiverId);
        console.log("data: "+ data);

        if (user) {
            io.to(user.socketId).emit("receive-message", data);
        }
    })

    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter(user => user.socketId !== socket.id);
        console.log("User disconnected!", activeUsers);
        io.emit("get-users", activeUsers);
    });
});

console.log("orrrr");