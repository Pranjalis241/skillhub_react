import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const StudentDashboard = () => {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const userEmail = localStorage.getItem('loggedInEmail');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/users?email=${userEmail}`);
                setUser(res.data[0]);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [userEmail]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${user.id}`, user);
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };

    if (!user) return <p className="text-center mt-5">Loading...</p>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center fw-bold" style={{ color: 'black' }}>Student Dashboard</h2>

            <Card className="shadow-sm mb-4 mx-auto" style={{
                maxWidth: '500px',
                background: 'linear-gradient(to right, #f3f5f8, #d9d1df, #e6dcec, #f3f5f8)'
            }}>
                <Card.Body className="p-3">
                    <h5 className="mb-3 text-center">Welcome, {user.username} 👋</h5>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.userType}</p>
                    <div className="text-center mt-3">
                        <Button variant="outline-primary" size="sm" onClick={() => setShowModal(true)}>
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                            Edit Profile
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Edit Profile Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StudentDashboard;
