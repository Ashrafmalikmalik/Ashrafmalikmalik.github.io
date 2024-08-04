import axios from 'axios';
import React, { useState } from 'react'
function Login() {
    const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('');

        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.get('http://localhost:4000/user', {
                    params: {
                        username: username,
                        password: password,
                    },
                });
                const user = response.data.find(
                    (user) => user.username === username && user.password === password
                );
                if (user) {
                    setMessage('Welcome to user');
                } else {
                    setMessage('Email and password do not match');
                }
            } catch (errot) {
                setMessage('Error in login ');
            }
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login