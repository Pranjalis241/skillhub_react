import React from 'react';
import './Header.css';
import SubText from "./SubText";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/skillhub_react/allcourses');
    };

    return (
        <div className="header-container">
            <div className="overlay container text-center text-lg-start">
                <div className="row align-items-center">
                    
                    {/* Text Section */}
                    <div className="col-12 col-lg-6">
                        <div className="heading">
                            <i className="fa fa-graduation-cap cap-icon"></i>
                            Master New Skills with <span className="highlight">SKILLHUB</span>
                        </div>
                        
                        <SubText />
                        
                        <div className="btn9-group">
                            <button className="btn9-primary" onClick={handleGetStarted}>Get Started</button>
                            <button className="btn9-secondary" onClick={handleGetStarted}>Learn More</button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <img src="images/pngegg.png" alt="Topper" className="header-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
