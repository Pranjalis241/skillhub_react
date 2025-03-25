import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is loaded
import { Carousel } from "bootstrap"; // Import Bootstrap's Carousel explicitly
import './Teachers.css';

const Teachers = () => {
    useEffect(() => {
        const carouselElement = document.querySelector("#toppersCarousel");
        if (carouselElement) {
            new Carousel(carouselElement, {
                interval: 2000, // Auto slide every 2 seconds
                ride: "carousel"
            });
        }
    }, []);

    return (
        <div className="container mt-5">
            {/* <h2 className="text-center fw-bold" style={{ textDecoration: "underline"}}>
                Our Teachers
            </h2> */}
           

            <div style={{ display: "flex", justifyContent: "center" }}>
  <div style={{ 
    //  background: "linear-gradient(135deg, #fceabb, #f8b500)", // Light yellow-orange gradient
     background: "linear-gradient(135deg, #e9d5ff, #d8b4fe)",
    borderRadius: "80px",
    padding: "20px", 
    textAlign: "center", // Center the text inside the div
    width: "300px" // Set a fixed width
  }}>
    <h2 
      className="text-center fw-bold" 
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        color: "#222",
        margin: "0",
        fontSize:"25px" 
      }}
    >
      Our Teachers
    </h2>
  </div>
</div>




            <div id="toppersCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/topper1.jpg" className="rounded-circle mx-auto mt-4" alt="Alice Johnson" width="250" height="250" />
                        <h5 className="mt-2 text-center">Alice Johnson</h5>
                    </div>
                    <div className="carousel-item">
                        <img src="images/topper2.png" className="rounded-circle mx-auto mt-4" alt="Bob Smith" width="230" height="250" />
                        <h5 className="mt-2 text-center">Bob Smith</h5>
                    </div>
                    <div className="carousel-item">
                        <img src="images/topper3.jpg" className="rounded-circle mx-auto mt-4" alt="Charlie Brown" width="250" height="250" />
                        <h5 className="mt-2 text-center">Charlie Brown</h5>
                    </div>
                    <div className="carousel-item">
                        <img src="images/topper2.webp" className="rounded-circle mx-auto mt-4" alt="Emma Wilson" width="250" height="250" />
                        <h5 className="mt-2 text-center">Emma Wilson</h5>
                    </div>
                    <div className="carousel-item">
                        <img src="images/topper5.jpg" className="rounded-circle mx-auto mt-4" alt="David Lee" width="250" height="250" />
                        <h5 className="mt-2 text-center">David Lee</h5>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#toppersCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#toppersCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
};

export default Teachers;