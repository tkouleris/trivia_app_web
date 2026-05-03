import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline } from 'react-ionicons'
import { GoogleLogin } from '@react-oauth/google';

import {login, googleLogin} from '../utils/http.jsx'

import {colors} from "../constants/colors.jsx";
import {useEffect, useState} from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const username = window.localStorage.getItem('username')
        const token = window.localStorage.getItem('token')
        if(token !== null && username !== null){
            navigate("/dashboard");
        }
    }, []);


    function goToRegistration() {
        navigate("/register");
    }

    function handleLogin(){
        login({email: email, password: password}).then( (response) =>{
            if(response.status === 1){
                window.localStorage.setItem('username', response.data.username);
                window.localStorage.setItem('token', response.data.token);
                navigate("/dashboard");
                return;
            }

            alert(response.message || 'Error during login')
        })
    }

    function handleGoogleSuccess(credentialResponse) {
        googleLogin(credentialResponse.credential).then((response) => {
            if (response.status === 1) {
                console.log(response.data);
                window.localStorage.setItem('username', response.data.username);
                window.localStorage.setItem('token', response.data.token);
                navigate("/dashboard");
                return;
            }
            alert(response.message || 'Error during Google login')
        })
    }

    function handleGoogleError() {
        alert('Google Login Failed');
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-icon-wrapper">
                    <HelpCircleOutline
                        color={colors.light}
                        height="100px"
                        width="100px"
                    />
                </div>
                
                <h1 className="login-title">kouleris trivia game</h1>
                <p className="login-subtitle">Test your knowledge!</p>

                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                            placeholder="Enter your password"
                        />
                    </Form.Group>

                    <div className="login-actions">
                        <Button className="login-btn-primary" onClick={handleLogin}>
                            Login
                        </Button>
                        <Button className="login-btn-secondary" onClick={goToRegistration}>
                            Register
                        </Button>
                    </div>

                    <div className="google-login-wrapper mt-3 d-flex justify-content-center">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleError}
                            theme="filled_blue"
                            shape="rectangular"
                            width="100%"
                        />
                    </div>

                    <div className="text-center mt-3">
                        <Button variant="link" onClick={() => navigate("/reset-password-page")} style={{color: colors.light, textDecoration: 'none'}}>
                            Forgot Password?
                        </Button>
                    </div>
                    <div className="text-center mt-1">
                        <Button variant="link" onClick={() => navigate("/")} style={{color: colors.light, textDecoration: 'none'}}>
                            Back to Home
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

