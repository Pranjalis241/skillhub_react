import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh',backgroundColor:'white' }}>
            <Row >
                {/* Left Side - Image */}
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <img
                        src="/images/Pasted image.png" // Replace with your actual image URL
                        alt="Login Illustration"
                        className="img-fluid"
                        style={{ maxWidth: "80%", height: "auto", marginTop: "-40px" }} // Adjust size and shift upward
                    />
                </Col>

                {/* Right Side - Login Form */}
                <Col md={6}>
                    <Card style={{ border: 'none'}}>
                      
                        <h3 className="text-center fw-bold" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Login</h3>

                        <Form onSubmit={handleSubmit}>
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


                            <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: 'blue', color: 'white' }}
                            >
                                Login
                            </button>


                            <p className="text-center mt-3">
                                Don't have an account? <Link to="/signup">Sign Up</Link>
                            </p>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;