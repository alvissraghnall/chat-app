import React, { useState, useEffect, useRef } from 'react'
import InputEmoji from 'react-input-emoji';
import { addNewMessage } from '../../services';
import Message from './Message'

const ChatView = ({ messages, setMessages, currentUser, chat, socket }) => {
  const [newMessage, setNewMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const scroll = useRef();

  const handleNewMessageChange = (value) => {
    setNewMessage(value);
  }
  const handleSend = async ev => {
    ev.type === "click" ? ev.preventDefault() : null;
    const messageToSend = {
      sender: currentUser,
      room: chat?._id,
      content: newMessage
    }

    try {
      const {data: msg} = await addNewMessage(messageToSend);
      setMessages([...messages, msg]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    } 

    sendToSocket(messageToSend);
  }

  const sendToSocket = (msg) => {
    if (chat?.members?.length === 2) { 
      const receiverId = chat?.members?.find(id => id !== currentUser);
      setSendMessage({
        ...msg, 
        receiverId
      })
    }
  }

  const handleMouse = ev => { 
    ev.target.style.background = ev.type === "mouseenter" ? "transparent" : "linear-gradient(98.44deg, #f9a225 0%, #f95f35 100%)";
    ev.target.style.outline = ev.type === "mouseenter" ? "none" : "";
    // {
    //   ...ev.target.style,
    //   background: 
    // }
    // alert(ev.type)
  }

  useEffect(() => {
    if(sendMessage !== null) {
      socket?.current?.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    if(receiveMessage !== null) {
      socket?.current?.on('receive-message', data => {
        setReceiveMessage(data);
      });
      if (receiveMessage.chatId === chat?._id) {
        setMessages([...messages, receiveMessage]);
      }
    }
  }, [receiveMessage]);

  return (
    <>
    <div className='flex flex-col gap-2 p-6 overflow-y-scroll'>
        {messages.map(msg => (
            <Message msg={msg} currentUserId={currentUser} key={msg.createdAt} messages={messages} />
        ))}
    </div>
    <div className="chat-sender bg-white flex justify-between h-14 items-center gap-4 p-3 rounded-2xl self-end">
        <div className='bg-[rgb(233,233,233)] rounded-lg flex justify-center items-center cursor-pointer font-semibold h-[38px] px-4'>+</div>
        <div className='text-sm flex-1 outline-none rounded-lg ml-[-.6rem]'>
          <InputEmoji
            value={newMessage}
            onChange={handleNewMessageChange}
            onEnter={handleSend}
            cleanOnEnter
            placeholder="Enter a message..."
          />
        </div>
        <button className='capitalize h-full px-4 flex items-center justify-center text-white border-none rounded-lg bg-[linear-gradient(98.44deg,#f9a225_0%,#f95f35_100%)] transition-all duration-200 hover:text-[#f5c32c] hover:border-[2px] hover:border-solid hover:border-[#f5c32c] hover:cursor-pointer hover:bg-transparent focus:ring focus:bg-transparent italic' onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleSend}> send </button>
    </div>
    </>
  )
}

// react-input-emoji

export default ChatView