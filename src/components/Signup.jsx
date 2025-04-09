import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('Student'); // Default user type

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newUser = { username, email, password, userType };
    
        try {
            await axios.post('http://localhost:3001/users', newUser);
            alert('Signup successful!');
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed!');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row style={{ maxWidth: '1000px' }}>
                {/* Left Side - Image */}
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <img
                        src="images/signup.png"
                        alt="Login Illustration"
                        className="img-fluid"
                    />
                </Col>

                {/* Right Side - Login Form */}
                <Col md={6}>
                    <Card style={{ border: 'none' }}>
                        <h3 className="text-center fw-bold" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Sign Up</h3>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>User Type</Form.Label>
                                <Form.Select
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}
                                    required
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Student">Student</option>
                                    <option value="Trainer">Trainer</option>
                                </Form.Select>
                            </Form.Group>

                            <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: 'blue', color: 'white' }}
                            >
                                Sign up
                            </button>

                            <p className="text-center mt-3">
                                Already have an account? <Link to="/skillhub_react/login">Login</Link>
                            </p>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
