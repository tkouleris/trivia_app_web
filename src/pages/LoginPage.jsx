import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { HelpCircleOutline } from 'react-ionicons'

import {styles} from "../utils/styles.jsx";
import {colors} from "../utils/colors.jsx";

export default function LoginPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/register");
    }

    return (
        <div className={'row dark-background'}>
            <div className="col-4"></div>
            <div className="col-4">
                <div style={{textAlign: "center"}}>
                    <HelpCircleOutline
                        color={colors.light}
                        height="250px"
                        width="250px"
                        onClick={() => alert('Hi!')}
                    />
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <div style={{textAlign: "center"}}>
                        <Button variant="primary" style={styles.loginButton}  type="submit">
                            Login
                        </Button>
                        <Button variant="primary" style={styles.registerButton}  onClick={handleClick} type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="col-4"></div>
        </div>

    );
}

