import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);


const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [chartType, setChartType] = useState('bar');

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:3001/users');
            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    // This is looping over every user in the users array to count how many Admins, Students, and Trainers exist.
    const countByUserType = users.reduce(
        (acc, user) => {
            acc[user.userType] = (acc[user.userType] || 0) + 1;
            return acc;
        },
        { Admin: 0, Student: 0, Trainer: 0 }
    );

    const chartData = {
        labels: ['Admin', 'Student', 'Trainer'],
        datasets: [
            {
                label: 'User Count',
                data: [
                    countByUserType.Admin,
                    countByUserType.Student,
                    countByUserType.Trainer,
                ],
                backgroundColor: ['#007bff', '#28a745', '#ffc107'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };


    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${selectedUser.id}`, selectedUser);
            setShowModal(false);
            fetchUsers(); // Refresh data
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:3001/users/${userId}`);
            fetchUsers(); // Refresh the user list after deletion
        } catch (err) {
            console.error(err);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]: value });
    };

    return (
        <div className="container mt-5">
             <h2 className="text-center mb-4 fw-bold text-primary">Admin Dashboard</h2>

            <div className="text-center mb-4">
            {/* setChartType('bar') or setChartType('pie') updates the state when the button is clicked. */}
                <Button variant={chartType === 'bar' ? 'primary' : 'outline-primary'} className="me-2" onClick={() => setChartType('bar')}>
                    Bar Chart
                </Button>
                <Button variant={chartType === 'pie' ? 'primary' : 'outline-primary'} onClick={() => setChartType('pie')}>
                    Pie Chart
                </Button>
            </div>

            <div className="mx-auto mb-5 p-3 shadow rounded bg-light" style={{ maxWidth: '500px' }}>
            <h5 className="text-center mb-3">User Type Distribution</h5>
{/* If chartType === 'bar', it shows the <Bar /> chart.Otherwise, it shows the <Pie /> chart. */}
                {chartType === 'bar' ? (
                    <Bar data={chartData} options={chartOptions} />
                ) : (
                    <Pie data={chartData} />
                )}

            </div>

            <div className="row">
                {users.map((user) => (
                    <div className="col-md-4 mb-3" key={user.id}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{user.username}</Card.Title>
                                <Card.Text>
                                    <strong>Email:</strong> {user.email} <br />
                                    <strong>Type:</strong> {user.userType}
                                </Card.Text>
                                <Button variant="primary" className="me-2" onClick={() => handleEditClick(user)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>

                    </div>

                ))}
            </div>



            {/* Edit Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={selectedUser.username}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={selectedUser.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>User Type</Form.Label>
                                <Form.Select
                                    name="userType"
                                    value={selectedUser.userType}
                                    onChange={handleChange}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Student">Student</option>
                                    <option value="Trainer">Trainer</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
