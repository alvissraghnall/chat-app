import React, { useState } from "react";
import { ThemeProvider } from "../../components/ThemeContext";
import Background from "../../components/Background";
import Layout from "../../components/Layout";
import Header from "../../components/chat/header";
import Sidebar from "../../components/chat/Sidebar";
import ChatLayout from "../../components/chat/Layout";

const Chat = () => {

    return (
        <>
        <ThemeProvider>
            <ChatLayout />

        </ThemeProvider>
        
        </>

    );
}

export default Chat;