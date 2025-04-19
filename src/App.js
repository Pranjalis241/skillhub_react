import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Allcourses from './components/Allcourses';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Gallery from './components/Gallery';
import AdminDashboard from './components/dashboards/AdminDashboard';
import StudentDashboard from './components/dashboards/StudentDashboard';
import TrainerDashboard from './components/dashboards/TrainerDashboard';
import Freecourses from './components/Freecourses';

function App() {
  return (
    <Router> 
        <Navbar />
        {/* <Counter /> */}
        <div> 
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/skillhub_react" element={<Home />} />
                <Route path="/skillhub_react/registration" element={<Registration />} />
                <Route path="skillhub_react/gallery" element={<Gallery />} />
                <Route path="skillhub_react/contact" element={<Contact />} />
                <Route path="skillhub_react/allcourses" element={<Allcourses />} />
                <Route path="skillhub_react/freecourses" element={<Freecourses />} />
                <Route path="skillhub_react/signup" element={<Signup/>} />
                <Route path="skillhub_react/login" element={<Login/>} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
            </Routes>
        </div>
        <Footer />
    </Router>
);
}

export default App;
