import React from "react";
import "./Aboutus.css"; // Custom CSS for styling

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Text */}
          <div className="col-lg-5 col-md-12">
            <img src="images/about-us2.png" alt="About Us" className="about-image" />
          </div>
           {/* Right Section: Text */}
          <div className="col-lg-7 col-md-12">
            {/* <h2 className="about-title">Our Mission</h2>
            */}
            <p className="about-text">
              At <span className="purple-text">Skillhub</span>, we are dedicated to helping individuals harness the
              potential of artificial intelligence. Whether you're interested in
              machine learning, data analysis, or AI ethics, our expert
              instructors are here to guide you on your educational journey.
              Join us and transform your understanding of AI.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutUs;