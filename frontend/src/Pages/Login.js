import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import CustomLink from "../Components/CustomLink";
import CustomTitle from "../Components/CustomTitle";
import BackCard from "../Components/BackCard";
import BackCardContent from "../Components/BackCardContent";

const Login = ({setIsAuthenticated}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await axios.post("/api/login", {email, password});

            if (res.status === 200) {
                setIsAuthenticated(true);
                navigate('/data');
            }
        } catch (error) {
            console.error("Login failed!");
        }
    };

    return <>
        <BackCard>
            <CustomTitle title="Login Page"/>
            <BackCardContent>
                <CustomInput title="email" state={email} setState={setEmail}/>
                <CustomInput title="password" state={password} setState={setPassword}/>
            </BackCardContent>
            <CustomButton title="Login" handler={handleSubmit}/>
            <CustomLink title="Register Page" to="/register"/>
        </BackCard>
    </>
};

export default Login;
