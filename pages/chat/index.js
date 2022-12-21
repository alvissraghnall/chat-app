import React, { useState } from "react";
import { ThemeProvider } from "../../components/ThemeContext";
import Background from "../../components/Background";
import Layout from "../../components/Layout";
import Header from "../../components/chat/header";
import Sidebar from "../../components/chat/Sidebar";
import ChatLayout from "../../components/chat/Layout";
import { unstable_getServerSession } from "next-auth";
import { NextAuthOptions } from "../api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

const Chat = () => {
    const { data: session } = useSession();

    if(typeof window !== "undefined") return null;

    if(session) {
        return (
            <>
            <ThemeProvider>
                <ChatLayout user={session.user} />
                {session.user?.id}
            </ThemeProvider>
            
            </>

        );
    }
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            session: await unstable_getServerSession(ctx.req, ctx.res, NextAuthOptions),
        }
    }
}

export default Chat;