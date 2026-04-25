import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline } from 'react-ionicons'

import {requestResetPassword} from '../utils/http.jsx'

import {colors} from "../constants/colors.jsx";
import {useState} from "react";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    function handleRequestReset() {
        requestResetPassword(email).then((response) => {
            if (response.status === 1) {
                alert('Reset token sent to your email.')
                navigate('/confirm-reset-password')
            } else {
                alert(response.message || 'Error requesting password reset')
            }
        })
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
                <p className="login-subtitle">Reset Password</p>

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
                    <div className="login-actions">
                        <Button className="login-btn-primary" onClick={handleRequestReset}>
                            Send Reset Link
                        </Button>
                        <Button className="login-btn-secondary" onClick={() => navigate("/login")}>
                            Back to Login
                        </Button>
                    </div>
                    <div className="text-center mt-3">
                        <Button variant="link" onClick={() => navigate("/")} style={{color: colors.light, textDecoration: 'none'}}>
                            Back to Home
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
