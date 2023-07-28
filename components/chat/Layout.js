import React, { useEffect, useRef, useState } from 'react';
import { userChats } from '../../services/';
// import Navbar from '../Navbar';
import Sidebar from './Aside';
import ChatBody from './ChatBody';
import DrawerButton from './DrawerButton';
import { io } from "socket.io-client";


const ChatLayout = ({ children, user }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [ currentChat, setCurrentChat ] = useState(null);
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const socket = useRef();
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URI;
 
    useEffect(() => { 
        const sock = () => {
            console.log("sock");
            socket.current = io(`${socketUrl}`);
            
            socket.current.emit("new-user", frUser.id);
            socket.current.on("connect", () => {
                socket.current.emit("--x");
                console.log("connected!");
            })
            socket.current.on("get-users", users => {
                setOnlineUsers(users);
            });
        }

        sock();
        
    }, [user]);

    console.log("\n\n == god ==", onlineUsers);

    const changeIsDrawerOpen = () => {
        console.log(isDrawerOpen, "out");
        setIsDrawerOpen(!isDrawerOpen);
    }
    const frUser = {
        id: "63a3850c49c7f2fb8ada070b"
    }

    const handleSearch = (val) => {
        setSearchVal(val);
        // query db, make actions .
    }

    const updateChats = (chats) => setChats(chats);

    useEffect(() => {
        const getChats = async () => {
            try {
                const chatsFromServer = await userChats(frUser.id);
                updateChats(chatsFromServer);
                console.log(chats, chatsFromServer);
            } catch (err) {
                console.log(err);
            }
        }
        getChats();
    }, [])
    console.log(chats, "chats");

    const checkOnlineStatus = chat => {
        if (chat.members?.length === 2) {
            // const chatMember = chat.members?.find(member => member !== user.id);
            // const online = onlineUsers.find(user => user.userId === chatMember);
            // return online ? true : false;
        }
    }

    return (
    <>
        {/* <div className='flex flex-auto bg-[#a7bcff] h-screen items-center justify-center'>
            <div className="w-full h-full rounded-md border-solid border-white border flex">
                <Sidebar />
            </div>
        </div> */}
        {/* <div className="flex"> */}
            <Sidebar isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} chats={chats} user={frUser} setCurrentChat={setCurrentChat} searchVal={searchVal} handleSearch={handleSearch} checkOnlineStatus={checkOnlineStatus} />
            <div className="ml-72 w-auto relative overflow-y-auto z-[1]">
                <DrawerButton isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} />
                <ChatBody chat={currentChat} user={frUser} socket={socket} />
            </div>
        {/* </div> */}
        {/* {onlineUsers.map(user => <div>{user.id}</div>)} */}
        
    </>
)
}

export default ChatLayout