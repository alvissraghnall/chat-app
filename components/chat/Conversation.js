import React, { useState, useEffect } from 'react'
import { getUser } from '../../services/';
// import logo from "../../assets/maxi.svg";


const Conversation = ({ 
    chat,
    currentUser,
    checkOnlineStatus
}) => {
    const [userData, setUserData] = useState(null);
    const online = checkOnlineStatus(chat);

    console.log(currentUser, "convo dighi mma")
    useEffect(() => {
      const getUserData = async (id) => {
        try {
          const user = await getUser(id);
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      }
      if (chat?.members?.length === 2) { 
        const userId = chat?.members?.find(id => id !== currentUser);
        console.log(chat.members, userId, currentUser);
        console.log(222)
        getUserData(userId);
        console.log(888)
      };
    }, []);
  return (
    <>
    <div className="p-2 relative hover:bg-[#35caca38] dark:hover:bg-gray-600 cursor-pointer flex justify-between items-center hover:rounded-md">
      <div className="relative flex gap-2">
        {online && <div className="absolute left-8 bottom-0 w-4 h-4 rounded-[50%] bg-[greenyellow]"></div>}
        <img src={`https://avatars.dicebear.com/api/adventurer/34.svg`} className="h-12 w-12 rounded-[50%]" />
        <div className="text-sm flex flex-col items-start justify-center">
          <span className='font-bold'>{ chat?.name || userData?.name }</span>
          <span>{online ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
    <hr className='w-4/5 border-solid border-[#d4d2d2] dark:border-gray-400 text-center absolute mx-auto' />
    </>
  )
}

export default Conversation