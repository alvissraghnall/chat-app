import React, { useEffect, useState } from 'react';
import { userChats } from '../../services/chats.service';
// import Navbar from '../Navbar';
import Sidebar from './Aside';
import ChatBody from './ChatBody';
import DrawerButton from './DrawerButton';


const ChatLayout = ({ children, user }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [ currentChat, setCurrentChat ] = useState(null);
    const [chats, setChats] = useState([]);
    const changeIsDrawerOpen = () => {
        console.log(isDrawerOpen, "out");
        setIsDrawerOpen(!isDrawerOpen);
    }
    const frUser = {
        id: "63a3850c49c7f2fb8ada070b"
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

    return (
    <>
        {/* <div className='flex flex-auto bg-[#a7bcff] h-screen items-center justify-center'>
            <div class="w-full h-full rounded-md border-solid border-white border flex">
                <Sidebar />
            </div>
        </div> */}
        <DrawerButton isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} />
        <Sidebar isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} chats={chats} user={user} setCurrentChat={setCurrentChat} />
        <ChatBody chat={currentChat} user={user} />
    </>
)
}

export default ChatLayout