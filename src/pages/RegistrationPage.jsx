import {People} from "react-ionicons";
import {colors} from "../constants/colors.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {styles} from "../constants/styles.jsx";
import {useState} from "react";
import {validateEmail, validatePassword} from "../utils/validators.jsx";
import {registerUser} from "../utils/http.jsx"
import {useNavigate} from "react-router-dom";

export default function RegistrationPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleRegistration(){
        if(!validateEmail(email)){
            alert('Email address is not valid');
            return;
        }

        if(!validatePassword(password)){
            alert('Password must be at least 6 characters, having one number and one special character');
            return;
        }

        if(username.length === 0){
            alert('Username cannot be empty');
            return;
        }

        registerUser(username, email, password).then( (response) => {
            if(response.status === 0){
                alert(response.message)
            }

            if(response.status === 1){
                alert('Registration Completed');
                navigate("/");
            }
        })

    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-icon-wrapper">
                    <People
                        color={colors.light}
                        height="100px"
                        width="100px"
                    />
                </div>
                
                <h1 className="login-title">Join Us</h1>
                <p className="login-subtitle">Create your account to start playing</p>

                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={(e)=>setUsername(e.target.value)} 
                            value={username} 
                            placeholder="Choose a username"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            onChange={(e)=>setEmail(e.target.value)} 
                            value={email} 
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            onChange={(e)=>setPassword(e.target.value)} 
                            placeholder="Enter your password"
                        />
                    </Form.Group>

                    <div className="login-actions">
                        <Button className="login-btn-primary" onClick={handleRegistration}>
                            Register
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