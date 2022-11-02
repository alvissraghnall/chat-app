import React, { useState } from "react";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";


const User = () => {

    return (
        <ThemeProvider>
            <Background>
            {"..."}
            </Background>
        </ThemeProvider>
    );
}

export default User;