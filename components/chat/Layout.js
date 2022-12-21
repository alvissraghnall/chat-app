import React, { useEffect, useState } from 'react';
import { userChats } from '../../services/chats.service';
import Navbar from '../Navbar';
import Sidebar from './Aside';
import DrawerButton from './DrawerButton';


const ChatLayout = ({ children, user }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [chats, setChats] = useState([]);
    const changeIsDrawerOpen = () => {
        console.log(isDrawerOpen, "out");
        setIsDrawerOpen(!isDrawerOpen);
    }

    useEffect(() => {
        const getChats = async () => {
            try {
                const chatsFromServer = await userChats(user.id);
                setChats(chatsFromServer);
                console.log(chats, chatsFromServer);
            } catch (err) {
                console.log(err);
            }
        }
        getChats();
    }, [user])

    return (
    <>
        {/* <div className='flex flex-auto bg-[#a7bcff] h-screen items-center justify-center'>
            <div class="w-full h-full rounded-md border-solid border-white border flex">
                <Sidebar />
            </div>
        </div> */}
        <DrawerButton isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} />
        <Sidebar isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} chats={chats} user={user} />
    </>
)
}

export default ChatLayout