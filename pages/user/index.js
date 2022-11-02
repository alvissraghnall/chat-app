import React, { useState } from "react";
import { ThemeProvider } from "../../components/ThemeContext";
import Background from "../../components/Background";
import Layout from "../../components/Layout";

const User = () => {

    return (
        <ThemeProvider>
            <Background>
                <Layout>
                    {"..."}
                </Layout>
            </Background>
        </ThemeProvider>
    );
}

export default User;