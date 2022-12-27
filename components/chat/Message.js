import React from 'react'
import { format } from "timeago.js";

const Chat = ({ msg, currentUser }) => {
  return (
    <div className={`bg-[linear-gradient(to_right,#44acce_0%,#2875a4_50%,#1919d0_100%)] gap-2 flex-col flex w-fit max-w-md rounded-t-2xl rounded-br-2xl p-3 text-white ${msg.from === currentUser ? "mine" : "theirs"}`}>
        <span>{msg.content}</span>
        <span>{format(msg.createdAt)}</span>
    </div>
  )
}

export default Chat