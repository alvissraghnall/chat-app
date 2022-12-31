import React, { useRef, useEffect } from 'react'
import { format } from "timeago.js";

const Message = ({ msg, currentUserId, messages }) => {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({
      behavior: "smooth"
    })
  
  }, [messages])
  

  return (
    <div ref={scroll} className={`bg-[linear-gradient(to_right,#44acce_0%,#2875a4_50%,#1919d0_100%)] gap-2 flex-col flex w-fit max-w-md rounded-t-2xl rounded-br-2xl p-3 text-white ${msg.from === currentUserId ? "self-end rounded-t-2xl rounded-bl-2xl bg-[linear-gradient(98.61deg,#f0d441_0%,#f4cf07_50%,#f98f07_100%)]" : "theirs"}`}>
      <span>{msg.content}</span>
      <span className="text-[0.9rem] self-end">{format(msg.createdAt)}</span>
    </div>
  )
}

export default Message;