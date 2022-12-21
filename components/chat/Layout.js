import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from './Aside';
import DrawerButton from './DrawerButton';


const ChatLayout = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const changeIsDrawerOpen = () => {
        console.log(isDrawerOpen, "out");
        setIsDrawerOpen(!isDrawerOpen);
    }
    return (
    <>
        {/* <div className='flex flex-auto bg-[#a7bcff] h-screen items-center justify-center'>
            <div class="w-full h-full rounded-md border-solid border-white border flex">
                <Sidebar />
            </div>
        </div> */}
        <DrawerButton isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} />
        <Sidebar isOpen={isDrawerOpen} changeIsOpen={changeIsDrawerOpen} />
    </>
)
}

export default ChatLayout