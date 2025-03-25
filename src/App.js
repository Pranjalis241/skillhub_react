import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Allcourses from './components/Allcourses';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Gallery from './components/Gallery';
function App() {
  return (
    <Router> 
        <Navbar />
        {/* <Counter /> */}
        <div> 
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/skillhub_react" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/allcourses" element={<Allcourses />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
        <Footer />
    </Router>
);
}

export default App;
