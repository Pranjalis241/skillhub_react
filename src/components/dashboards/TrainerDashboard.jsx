import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form, Table, Row, Col } from 'react-bootstrap';
import "./TrainerDashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const TrainerDashboard = () => {
    const [user, setUser] = useState(null);
    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showStudentModal, setShowStudentModal] = useState(false);
    
    const userEmail = localStorage.getItem('loggedInEmail');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await axios.get(`http://localhost:3001/users?email=${userEmail}`);
                setUser(userRes.data[0]);

                const studentRes = await axios.get(`http://localhost:3001/users?userType=Student`);
                setStudents(studentRes.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
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

    const handleDeleteStudent = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await axios.delete(`http://localhost:3001/users/${id}`);
                setStudents(prev => prev.filter(student => student.id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleStudentSave = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${selectedStudent.id}`, selectedStudent);
            setStudents(prev =>
                prev.map(s =>
                    s.id === selectedStudent.id ? selectedStudent : s
                )
            );
            setShowStudentModal(false);
            alert("Student updated successfully!");
        } catch (err) {
            console.error(err);
        }
    };

    const handleEditClick = () => {
        setShowModal(true);
    };

    if (!user) return <p className="text-center mt-5">Loading...</p>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center fw-bold">Trainer Dashboard</h2>

            <Card className="shadow-sm mb-4 mx-auto trainer-info-card">
                <Card.Body className="p-3">
                    <h5 className="mb-3 text-center">Welcome, {user.username} 👋</h5>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.userType}</p>
                    <div className="text-center mt-3">
                        <Button variant="outline-primary" size="sm" onClick={handleEditClick}>
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                            Edit Profile
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <h4 className="mb-3">Total Students: <span className="text-success">{students.length}</span></h4>

            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.username}</td>
                            <td>{student.email}</td>
                            <td className="text-center">
                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => {
                                        setSelectedStudent(student);
                                        setShowStudentModal(true);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDeleteStudent(student.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Trainer Edit Modal */}
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

            {/* Student Edit Modal */}
            <Modal show={showStudentModal} onHide={() => setShowStudentModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedStudent && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={selectedStudent.username}
                                    onChange={(e) =>
                                        setSelectedStudent({
                                            ...selectedStudent,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={selectedStudent.email}
                                    onChange={(e) =>
                                        setSelectedStudent({
                                            ...selectedStudent,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowStudentModal(false)}>Cancel</Button>
                    <Button variant="success" onClick={handleStudentSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TrainerDashboard;