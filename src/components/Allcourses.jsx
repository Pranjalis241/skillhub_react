import React from 'react';
// Parent component send the data(props)
import CourseCard from './CourseCard';
import "./Allcourses.css"
import ScrollToTop from './ScrollToTop';

function Allcourses() {
  return (
    <div className="all-courses-container">
      <ScrollToTop /> 
    <h2
  className="heading"
  style={{
    fontFamily: "Arial",
    fontWeight: "bold",
    padding: "20px",
    margin: "0",
  }}
>
  All Courses
</h2>

      <div className="courses-grid">
        <CourseCard
          title="Artificial Intelligence"
          image="images/aig7.jpeg"
          description="Learn AI, ML, and NLP from scratch with us."
          price="4999"
        />

        <CourseCard
          title="Web Development"
          image="images/wweb.jpg"
          description="Master HTML, CSS, JavaScript, and React."
          price="3999"
        />

        <CourseCard
          title="Cybersecurity"
          image="images/cs.jpeg"
          description="Understand network security, cryptography, and risk management."
          price="4599"
        />

        <CourseCard
          title="Cybersecurity"
          image="images/cs.jpeg"
          description="Understand network security, cryptography, and risk management."
          price="4599"
        />

        <CourseCard
          title="Cybersecurity"
          image="images/cs.jpeg"
          description="Understand network security, cryptography, and risk management."
          price="4599"
        />

        <CourseCard
          title="Data Analytics"
          image="images/machine.jpg"
          description="Learn data mining, visualization, and big data technologies."
          price="4299"
        />
      </div>
    </div>
  );
}

export default Allcourses;