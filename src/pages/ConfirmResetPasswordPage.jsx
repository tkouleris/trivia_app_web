import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline } from 'react-ionicons'

import {resetPassword} from '../utils/http.jsx'

import {colors} from "../constants/colors.jsx";
import {useState} from "react";

export default function ConfirmResetPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')

    function handleResetPassword() {
        resetPassword(email, token, password).then((response) => {
            if (response.status === 1) {
                alert('Password reset successfully.')
                navigate('/login')
            } else {
                alert(response.message || 'Error resetting password')
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
                <p className="login-subtitle">Enter Reset Token</p>

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
                    <Form.Group className="mb-3" controlId="formBasicToken">
                        <Form.Label>Reset Token</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={token} 
                            onChange={(e)=>setToken(e.target.value)} 
                            placeholder="Enter reset token"
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                            placeholder="Enter new password"
                        />
                    </Form.Group>
                    <div className="login-actions">
                        <Button className="login-btn-primary" onClick={handleResetPassword}>
                            Reset Password
                        </Button>
                        <Button className="login-btn-secondary" onClick={() => navigate("/reset-password-page")}>
                            Back
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
