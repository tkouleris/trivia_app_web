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

    return <div className={'row dark-background'}>
        <div className={"col-xl-4 col-4"}></div>
        <div className={"col-xl-4 col-4"}>
            <div style={{textAlign: "center"}}>
                <People
                    color={colors.light}
                    height="250px"
                    width="250px"
                />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Enter username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </Form.Group>
                <div style={{textAlign: "center"}}>
                    <Button variant="primary" style={styles.registerButton} onClick={handleRegistration}>
                        Register
                    </Button>
                </div>
            </Form>
        </div>
        <div className={"col-xl-4 col-4"}></div>
    </div>
}