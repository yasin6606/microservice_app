// src/Login.js
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = ({setIsAuthenticated}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(`/api/login`, {email, password});
        console.log("Login: ", res);

        if (res.status === 200) {
            setIsAuthenticated(true);
            navigate('/data');
        } else {
            console.error("Login failed!");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <Link to="/register">Register Page</Link>
            </div>
        </div>
    );
};

export default Login;
