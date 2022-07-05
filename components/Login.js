import React, { useState } from "react";
import styles from '../styles/Login.module.css'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}> Maxi Chat App </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="Password"
                        required
                    />

                    <div align="center">
                        <button type="submit" className={styles.button}>
                            <span> Start Chatting! </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;