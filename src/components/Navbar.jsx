import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import './Navbar.css';

const NavigationBar = () => {
    return (
        // <Navbar expand="lg" style={{ background: 'linear-gradient(135deg,rgb(250, 235, 245),rgb(222, 242, 253),rgb(250, 235, 245),rgb(222, 242, 253))', fontWeight: "bold" }}>
        <Navbar expand="lg" style={{ background: 'linear-gradient(135deg,rgb(211, 214, 211),rgb(210, 216, 213)', fontWeight: "bold" }}>
            <div className="container">
               
          
<Navbar.Brand 
  as={Link} 
  to="/" 
  style={{ 
    fontSize: "1.55rem", 
    // background: "linear-gradient(135deg, white, white)",
    // borderRadius: "50px", 
    // padding: "10px 20px",
    // display: "inline-block"
  }}
>
  <i className="fa-solid fa-graduation-cap me-2"></i> SkillHub
</Navbar.Brand>



                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">  {/* Added align-items-center */}

                        <Nav.Link as={Link} to="/skillhub_react/">
                            <i className="fa-solid fa-home me-2"></i> Home
                        </Nav.Link>

                        {/* <Nav.Link as={Link} to="/skillhub_react/registration">
                            <i className="fa-solid fa-user-plus me-2"></i> Registration
                        </Nav.Link> */}

                        <Nav.Link as={Link} to="/skillhub_react/Gallery">
                            <i className="fa-solid fa-user-plus me-2"></i> AI Gallery
                        </Nav.Link>
                        
                        {/* Dropdown Menu */}
                        <NavDropdown
                            title={<span><i className="fa-solid fa-book me-2"></i> AI Courses</span>}
                            id="coursesDropdown"
                        >
                            <NavDropdown.Item as={Link} to="/skillhub_react/allcourses">All courses</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/data-science">Data Science</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/ai">Artificial Intelligence</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/skillhub_react/contact">
                            <i className="fa-solid fa-envelope me-2"></i> Contact Us
                        </Nav.Link>

                        {/* Sign Up & Login Buttons */}

                        <div className="butn-group">
                            <Nav.Link as={Link} to="/skillhub_react/login">
                                <button className="butn-primary" id="testbutton">LOGIN</button>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/skillhub_react/signup">
                                <button className="butn-secondary" id="testbutton2">SIGN UP</button>
                            </Nav.Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavigationBar;