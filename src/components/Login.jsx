import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Card, Row, Col } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}&userType=${userType}`);
            if (res.data.length > 0) {
                const user = res.data[0];
    
                // ✅ Save user info in localStorage
                localStorage.setItem("loggedInEmail", user.email);
                localStorage.setItem("loggedInUserType", user.userType);
                localStorage.setItem("loggedInUsername", user.username);
    
                // ✅ Redirect to dashboard based on userType
                if (user.userType === 'Admin') navigate('/admin-dashboard'); //this is in app.js using routing
                else if (user.userType === 'Student') navigate('/student-dashboard');
                else if (user.userType === 'Trainer') navigate('/trainer-dashboard');
            } else {
                alert('Invalid credentials!');
            }
        } catch (err) {
            console.error(err);
            alert('Login failed!');
        }
    };
    
 
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh', backgroundColor: 'white' }}>
            <Row>
                {/* Left Side - Image */}
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <img
                        src="images/Pasted image.png"
                        alt="Login Illustration"
                        className="img-fluid"
                        style={{ maxWidth: "80%", height: "auto", marginTop: "-40px" }}
                    />
                </Col>

                {/* Right Side - Login Form */}
                <Col md={6}>
                    <Card style={{ border: 'none' }}>
                        <h3 className="text-center fw-bold" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>Login</h3>

                        <Form onSubmit={handleSubmit}> {/*when u will submit d form, it will go to handlesubmit */}
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
                                    <option value="">Select user type</option>
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
                                Login
                            </button>

                            <p className="text-center mt-3">
                                Don't have an account? <Link to="/skillhub_react/signup">Sign Up</Link>
                            </p>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
