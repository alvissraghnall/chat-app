import React from 'react'
import { format } from 'timeago.js'

const ChatView = ({ messages, currentUser }) => {
  return (
    <>
    <div className='flex flex-col gap-2 p-6 overflow-y-scroll'>
        {messages.map(msg => (
            <>
                <div className={`bg-[linear-gradient(to_right,#44acce_0%,#2875a4_50%,#1919d0_100%)] gap-2 flex-col flex w-fit max-w-md rounded-t-2xl rounded-br-2xl p-3 text-white ${msg.from === currentUser ? "mine" : "theirs"}`}>
                    <span>{msg.content}</span>
                    <span>{format(msg.createdAt)}</span>
                </div>
            </>
        ))}
    </div>
    <div className="chat-sender">
        <div>+</div>
    </div>
    </>
  )
}

// react-input-emoji

export default ChatView