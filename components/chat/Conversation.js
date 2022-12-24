import React, { useState, useEffect } from 'react'
import { getUser } from '../../services/chats.service';
import logo from "../../assets/maxi.svg";

const Conversation = ({ 
    chat,
    currentUser
}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const getUserData = async (id) => {
        try {
          const user = await getUser(id);
          setUserData(user);
        } catch (err) {
          console.error(err);
        }
      }
      if (chat.members === 2) { 
        const userId = chat.members.find(id => id !== currentUser);
        getUserData(userId);
      };
    }, []);
  return (
    <>
    <div className="border-[0.5rem] p-2 hover:bg-[#80808038] cursor-pointer flex justify-between items-center">
      <div className="relative flex gap-2">
        <div className="absolute left-8 w-4 h-4 rounded-[50%] bg-[greenyellow]"></div>
        <img src={logo} className="h-12 w-12 rounded-[50%]" />
        <div className="text-sm flex flex-col items-start justify-center">
          <span className='font-bold'>{ chat?.name || userData?.name }</span>
          <span>Online</span>
        </div>
      </div>
    </div>
    <hr className='w-4/5 border-solid border-[#ececec] border-[0.1px]' />
    </>
  )
}

export default Conversation