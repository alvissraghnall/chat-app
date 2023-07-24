const io = require("socket.io-client");

const socket = io.connect("http://localhost:8800");

socket.on("connect", () => {
    console.log("ccccc");
    socket.emit("--x");

    socket.emit("new-user", "djnhh389n045ksjkdksdn" );

    socket.on("get-users", users => {
        console.log(users);
    }); 
});

// socket.emit("new-user", "dnkidnjkald");

console.log("strrr");