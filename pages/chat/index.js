import { useState } from "react";
import { ThemeProvider } from "../../components/ThemeContext";
import Background from "../../components/Background";
import Sidebar from "../../components/chat/Sidebar";
import ChatLayout from "../../components/chat/Layout";
import { getServerSession, unstable_getServerSession } from "next-auth";
import { Loading } from "..";
import { NextAuthOptions } from "../api/auth/[...nextauth]";
import { userChats } from "../../services";

const Chat = ({ session, chats }) => {
    // if(typeof window !== "undefined") return null;

    // if(session) {
        console.log(session, chats);
        return (
            <>
            <ThemeProvider>
                <ChatLayout user={session?.user} chats={chats} />
                {/* {session?.user?.id} */}
            </ThemeProvider>
            
            </>

        );
    // }
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            session: JSON.stringify(await getServerSession(ctx.req, ctx.res, NextAuthOptions), null, 2),
            chats:  await userChats(this.session?.user?.id),
            
        }
    }
}

export default Chat;