import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>

<footer className="footer bg-dark text-white py-4">
    <div className="container">
        <div className="row justify-content-between">
            {/* About Section */}
            <div className="col-md-4 text-center text-lg-start">
                <h5 className="brand" style={{ color: "pink", fontStyle: "Lora, sans-serif", fontWeight: "bold", fontSize: "30px" }}>
                    SKILLHUB
                </h5>
                <p>
                    SkillHub is committed to empowering learners with cutting-edge courses in AI, Machine Learning, Cybersecurity, and Web Development.  
                    Join us to upskill and accelerate your career growth.
                </p>
            </div>

            {/* Quick Links / Contact Section */}
            <div className="col-md-4 text-center text-lg-start">
               
                <h5 className="brand" style={{ color: "pink", fontStyle: "Lora, sans-serif", fontWeight: "bold", fontSize: "30px" }}>
                 Contact Us:
                </h5>
                <p><i className="fa-solid fa-envelope me-2"></i> skillhub@gmail.com</p>
                <p><i className="fa-solid fa-phone me-2"></i> +91 9972143214</p>
                <p><i className="fa-solid fa-location-dot me-2"></i> Bangalore, India</p>
            </div>

            {/* Feedback Section */}
            <div className="col-md-4 text-center text-lg-start">
               
                <h5 className="brand" style={{ color: "pink", fontStyle: "Lora, sans-serif", fontWeight: "bold", fontSize: "30px" }}>
                    Give your Feedback:
                </h5>
                <p>Help us grow! Share your feedback and suggestions.</p>
                <form className="d-flex">
                    <input type="text" className="form-control me-2" placeholder="Share your feedback" />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

        {/* Social Icons - Keeping .footer-social structure */}
        <div className="text-center mt-4 footer-social">
            <h5>Follow Us:</h5>
            <i className="fa-brands fa-facebook"></i>
            <a href="https://facebook.com">Facebook</a>
            <i className="fa-brands fa-twitter"></i>
            <a href="https://twitter.com">Twitter</a>
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
            <p>© 2025 SkillHub. All Rights Reserved.</p>
        </div>
    </div>
</footer>

        </>
    );
};

export default Footer;
