import React from 'react';
import CourseCard from './CourseCard';
import "./Allcourses.css"
function Freecourses() {
    return (
      <div className="all-courses-container">
      
      <h2
    className="heading"
    style={{
      fontFamily: "Arial",
      fontWeight: "bold",
      padding: "20px",
      margin: "0",
    }}
  >
    Free Courses
  </h2>
  
        <div className="courses-grid">
          <CourseCard
            title="Data Structure"
            image="images/dsa.jpg"
            description="Learn Data structure & algorithm from scratch with us."
            price="0"
          />
  
          <CourseCard
            title="Cybersecurity"
            image="images/cybersecurity.jpg"
            description="Understand network security, cryptography, and risk management."
            price="0"
          />
  
          <CourseCard
            title="Data Analytics"
            image="images/machine.jpg"
            description="Learn data mining, visualization, and big data technologies."
            price="0"
          />
        </div>
      </div>
    );
  }
  
  export default Freecourses;