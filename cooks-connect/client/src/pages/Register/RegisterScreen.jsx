import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./RegisterScreen.css";
import { useState } from 'react';

const RegisterScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState(null);

    const SubmitHandler = (e) => {

        e.preventDefault();

        console.log(name, email, password)
    }

    return (
        <div className="loginContainer">
            Register
            <Form onSubmit={SubmitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={name}
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                    />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                    />
                </Form.Group>

                <Form.Group controlId="pic">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        id="custom-file"
                        type="file"
                        label="Upload Profile Picture"
                        custom
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default RegisterScreen;