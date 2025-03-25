import React from "react";
import { FaUserTie, FaClock, FaGlobe, FaBookOpen } from "react-icons/fa";

const ColorfulBoxes = () => {
  const boxes = [
    {
      icon: <FaUserTie size={30} />,
      title: "Expert Instructor",
      text: "Expert instructors bring deep experience and provide quality education and guidance.",
      color: "rgba(138, 43, 226, 0.2)", // Light Purple
    },
    {
      icon: <FaClock size={30} />,
      title: "24/7 Support Available",
      text: "With 24/7 support available, help is always available for any concern or question.",
      color: "rgba(255, 215, 0, 0.2)", // Light Yellow
    },
    {
      icon: <FaGlobe size={30} />,
      title: "Lifetime Access",
      text: "With lifetime access, learn from pre-recorded materials at your own pace.",
      color: "rgba(144, 238, 144, 0.2)", // Light Green
    },
    {
      icon: <FaBookOpen size={30} />,
      title: "Learn Anywhere",
      text: "With Learn Anywhere, education is not limited to a classroom but happens from any location.",
      color: "rgba(255, 99, 71, 0.2)", // Light Red
    },
  ];

  return (  
    <div className="container mt-4">
      <div className="row">
        {boxes.map((box, index) => (
          <div key={index} className="col-md-3">
            <div
              className="p-4 text-center rounded shadow-sm"
              style={{ backgroundColor: box.color }}
            >
              <div className="mb-2" style={{ color: "#333" }}>{box.icon}</div>
              <h5 style={{ fontWeight: "bold" }}>{box.title}</h5>
              <p>{box.text}</p>
              <a href="#" className="font-weight-bold">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorfulBoxes;