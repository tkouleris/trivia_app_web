import {People} from "react-ionicons";
import {colors} from "../constants/colors.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {styles} from "../constants/styles.jsx";

export default function RegistrationPage() {
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
                    <Form.Control type="text" placeholder="Enter username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div style={{textAlign: "center"}}>
                    <Button variant="primary" style={styles.registerButton}>
                        Register
                    </Button>
                </div>
            </Form>
        </div>
        <div className={"col-xl-4 col-4"}></div>
    </div>
}