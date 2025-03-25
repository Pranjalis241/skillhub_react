import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p>© 2025 SkillHub. All Rights Reserved.</p>
                <div className="footer-contact d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <h5 className="mb-2 mb-lg-0">Contact Us:</h5>
                    <p><i className="fa-solid fa-envelope"></i> Email: skillhub@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> Phone: +91 9972143214</p>
                    <p><i className="fa-solid fa-location-dot"></i> Address: Bangalore, India</p>
                </div>
                <div class="footer-social">
                    <h3>Follow Us:</h3>
                    <i class="fa-brands fa-facebook"></i>
                    <a href="https://facebook.com">Facebook</a>
                    <i class="fa-brands fa-twitter"></i>
                    <a href="https://twitter.com">Twitter</a>
                    <i class="fa-brands fa-linkedin"></i>
                    <a href="https://linkedin.com">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;