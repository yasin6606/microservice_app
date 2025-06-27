// src/Register.js
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import CustomTitle from "../Components/CustomTitle";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import CustomLink from "../Components/CustomLink";
import BackCard from "../Components/BackCard";
import BackCardContent from "../Components/BackCardContent";
import Alert from "../Components/Alert";

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regStatus, setRegStatus] = useState({msg: undefined, statusColor: ""});
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setRegStatus({msg: undefined, statusColor: ""});

        try {
            const response = await axios.post("/api/register", {
                email,
                password,
            }, {headers: {'Content-Type': 'application/json'}});

            if (response.status === 201) {
                setRegStatus({msg: 'Registration Successful!', statusColor: "blue"});
                navigate('/login'); // Redirect to login after successful registration
            }
        } catch (err) {
            setRegStatus({msg: 'Registration failed. Please try again.', statusColor: "red"});
            console.error(err);
        }
    };

    return <>
        <BackCard>
            <CustomTitle title="Register Page"/>
            <BackCardContent>
                <CustomInput title="firstname" state={firstname} setState={setFirstname}/>
                <CustomInput title="lastname" state={lastname} setState={setLastname}/>
                <CustomInput title="email" state={email} setState={setEmail}/>
                <CustomInput title="password" state={password} setState={setPassword}/>
                <CustomInput title="phone number" state={phone} setState={setPhone}/>
            </BackCardContent>
            <CustomButton title="Register" handler={handleSubmit}/>
            <Alert title={regStatus.msg} color={regStatus.statusColor}/>
            <CustomLink title="Login Page" to="/login"/>
        </BackCard>
    </>;
};

export default Register;
