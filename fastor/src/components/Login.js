import React, { useState } from 'react'
import "./Login.css"
import { Button, Input } from 'antd';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


const Login = () => {
    const [phoneNo, setPhoneNo] = useState('');
    const [response, setResponse] = useState("")
    const handlePhoneNumber = (event) => {
        setPhoneNo(event.target.value)
    }
    const handleButton = async () => {
        await sendOtp()
    }

    const sendOtp = async () => {
        const data = {
            phone: phoneNo,
            dial_code: "+91"
        }
        const response = await axios.post(`https://staging.fastor.in/v1/pwa/user/register`, data);
        setResponse(response.data)
    }
    return (
        <>
            <div className='center'>
                <h2>Enter your Mobile Number</h2>
                <p>We will send you the 4 digit verification code</p>
                <Input placeholder='Enter your number' maxLength={10} value={phoneNo} onChange={handlePhoneNumber} />
                <Button className='verify-btn' onClick={handleButton}>Send code</Button>
            </div>
            {
                response.data && response.status &&
                <Redirect to={{ pathname: "/verify-otp", state: {response,phoneNo} }}> </Redirect>
            }

        </>

    )
}

export default Login
