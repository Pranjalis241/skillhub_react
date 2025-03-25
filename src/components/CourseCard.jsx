import React from 'react';
import './CourseCard.css';
// child component recieves data(props)
function CourseCard(props) {
  const handleBuyNow = () => {
    alert(`You have selected the ${props.title} course.`);
  };
  return (
    <div className="course-card">
      <img src={props.image} alt={props.title} className="course-image" />
      <div className="course-details">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="course-price"><strong>Price:</strong> ₹{props.price}</p>
        <button className="buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
