import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Maxi Chat App </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />

                    <div align="center">
                        <button type="submit" className="button">
                            <span> Start Chatting! </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;