import React from 'react';
import './Header.css';
import SubText from "./SubText";
function Header() {
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
                        {/* <p className="subtext">
                            Improve your coding skills by learning from the best teachers around the world. 
                            Also, get an amazing discount by clearing the scholarship test.
                        </p> */}
                          <SubText />
                        
                        <div className="btn-group">
                            <button className="btn-primary">Get Started</button>
                            <button className="btn-secondary">Learn More</button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <img src="assets/image/pngegg.png" alt="Topper" className="header-img" />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;