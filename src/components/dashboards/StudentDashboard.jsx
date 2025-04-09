import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form } from 'react-bootstrap';

const StudentDashboard = () => {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // You can store logged-in user ID/email in localStorage during login
    const userEmail = localStorage.getItem('loggedInEmail');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/users?email=${userEmail}`);
                setUser(res.data[0]); // only one user expected
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
            <h2 className="mb-4">Welcome in Student Dashboard, {user.username}</h2>
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
                    <Card.Text><strong>Role:</strong> {user.userType}</Card.Text>
                    <Button variant="primary" onClick={() => setShowModal(true)}>Edit Profile</Button>
                </Card.Body>
            </Card>

            {/* Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" value={user.username} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={user.email} onChange={handleChange} />
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
