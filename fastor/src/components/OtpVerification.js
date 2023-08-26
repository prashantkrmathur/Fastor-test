import React, { useEffect, useState } from 'react'
import { LeftOutlined } from "@ant-design/icons"
import { Button, InputNumber } from 'antd'
import "./Login.css"
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
const OtpVerification = (props) => {
    const { phoneNo } = props.location.state;
    const [firstDigit, setFirstDigit] = useState("");
    const [secondDigit, setSecondDigit] = useState("");
    const [thirdDigit, setThirdDigit] = useState("");
    const [fourtDigit, setFourthDigit] = useState("");
    const [fifthDigit, setFifthDigit] = useState("");
    const [sixthDigit, setSixthDigit] = useState("");
    const [response, setResponse] = useState("");
    const history = useHistory()
    const handleGoBackButton = () => {
        history.push("/login")
    }
    const handleVerifyButton = async () => {
        const data = {
            phone: phoneNo,
            otp: `${firstDigit}${secondDigit}${thirdDigit}${fourtDigit}${fifthDigit}${sixthDigit}`,
            dial_code: "+91"
        }
        const response = await axios.post("https://staging.fastor.in/v1/pwa/user/login", data);
        setResponse(response.data);
    }
    const handleFirstDigit = (value) => {
        setFirstDigit(value)
    }
    const handleSecondDigit = (value) => {
        setSecondDigit(value)
    }
    const handleThirdDigit = (value) => {
        setThirdDigit(value)
    }
    const handleFourthDigit = (value) => {
        setFourthDigit(value)
    }
    const handleFifthDigit = (value) => {
        setFifthDigit(value)
    }
    const handleSixthDigit = (value) => {
        setSixthDigit(value)
    }
    return (
        <>
            <LeftOutlined className="back-button" onClick={handleGoBackButton} />
            <div className='center'>
                <h2>OTP Verification</h2>
                <h5>Enter the verification code we just send on your number</h5>
                <div className='verification-code'>
                    <InputNumber className='code-input' value={firstDigit} onChange={handleFirstDigit} />
                    <InputNumber className='code-input' value={secondDigit} onChange={handleSecondDigit} />
                    <InputNumber className='code-input' value={thirdDigit} onChange={handleThirdDigit} />
                    <InputNumber className='code-input' value={fourtDigit} onChange={handleFourthDigit} />
                    <InputNumber className='code-input' value={fifthDigit} onChange={handleFifthDigit} />
                    <InputNumber className='code-input' value={sixthDigit} onChange={handleSixthDigit} />
                </div>
                <Button className='verify-btn' onClick={handleVerifyButton} >Verify </Button>
                <h5>Didn't recieve code
                    <span> Resend</span>
                </h5>
            </div>
            {
                response && response.data && response.status &&
                <Redirect to={{ pathname: "/dashboard", state: { response } }}> </Redirect>
            }
        </>

    )
}

export default OtpVerification
