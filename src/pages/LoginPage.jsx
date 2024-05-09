import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline } from 'react-ionicons'

import {login} from '../utils/http.jsx'

import {styles} from "../constants/styles.jsx";
import {colors} from "../constants/colors.jsx";
import {useState} from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function goToRegistration() {
        navigate("/register");
    }

    function handleLogin(){
        login({email: email, password: password}).then( (response) =>{
            console.log(response)
        })
    }

    return (
        <div className={'row dark-background'}>
            <div className={"col-xl-4 col-4"}></div>
            <div className={"col-xl-4 col-4"}>
                <div style={{textAlign: "center"}}>
                    <HelpCircleOutline
                        color={colors.light}
                        height="250px"
                        width="250px"
                    />
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                    </Form.Group>
                    <div style={{textAlign: "center"}}>
                        <Button variant="primary" style={styles.loginButton} onClick={handleLogin}>
                            Login
                        </Button>
                        <Button variant="primary" style={styles.registerButton}  onClick={goToRegistration} >
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
            <div className={"col-xl-4 col-4"}></div>
        </div>

    );
}

