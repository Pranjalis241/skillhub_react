import React from 'react';
// Parent component send the data(props)
import CourseCard from './CourseCard';
import "./Allcourses.css"

function Allcourses() {
  return (
    <div className="all-courses-container">
      <h2 className="heading">All Courses</h2>

      <div className="courses-grid">
        <CourseCard 
          title="Artificial Intelligence"
          image="https://via.placeholder.com/300x200?text=AI"
          description="Learn AI, ML, and NLP from scratch."
          price="4999"
        />

        <CourseCard 
          title="Web Development"
          image="https://via.placeholder.com/300x200?text=Web+Development"
          description="Master HTML, CSS, JavaScript, and React."
          price="3999"
        />

        <CourseCard 
          title="Cybersecurity"
          image="https://via.placeholder.com/300x200?text=Cybersecurity"
          description="Understand network security, cryptography, and risk management."
          price="4599"
        />

        <CourseCard 
          title="Data Analytics"
          image="https://via.placeholder.com/300x200?text=Data+Analytics"
          description="Learn data mining, visualization, and big data technologies."
          price="4299"
        />
      </div>
    </div>
  );
}

export default Allcourses;