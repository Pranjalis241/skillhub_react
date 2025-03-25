import React from 'react';
import Header from './Header';
import './Home.css';
import AboutUs from './Aboutus';
import ColorfulBoxes from "./ColorfulBoxes";
import Teachers from "./Teachers";

const Home = () => {
    // Internal CSS styles
    const cardStyles = {
        card1: { backgroundColor: "rgb(220, 215, 221)", color: "black" }, // Blue
        card2: { backgroundColor: "rgb(220, 215, 221)", color: "black" }, // Green
        card3: { backgroundColor: "rgb(220, 215, 221)", color: "black" }  // Red

    }



    return (
        <>
            <Header />
            <ColorfulBoxes />
            <AboutUs />


            <div style={{ minHeight: '60vh', padding: '1px', fontSize: '24px' }}>
                <div className="container mt-4">


                    {/* <h2 className="text-center fw-bold my-4" style={{ textDecoration: "underline" }}>
                        Most Searched Courses
                    </h2> */}



                    <div style={{ display: "flex", justifyContent: "center" ,padding: "20px"}}>
                            <div style={{
                                background: "linear-gradient(135deg, #e9d5ff, #d8b4fe)", // Soft lavender gradient
                                borderRadius: "80px",
                                padding: "20px",
                                textAlign: "center",
                                width: "300px"
                            }}>
                                <h2
                                    className="text-center fw-bold"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        color: "#222",
                                        margin: "0",
                                        fontSize:"21px",
                                     
                                    }}
                                >
                                   Most Searched Courses
                                </h2>
                              
                            </div>
                        </div>


                    <div className="row" style={{ fontFamily: "'Lora', serif" }}>
                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div className="card mb-3" style={cardStyles.card1}>
                                <img src="/images/wweb.jpg" className="card-img-top fixed-img" alt="Web Development" />
                                <img src={`https://pranjalis241.github.io/skillhub_react/images/wweb.jpg`} alt="logo" />

                                <div className="card-body">
                                    <h3 className="card-title" style={{ fontWeight: "bold" }}>Web Development</h3>

                                    <p className="card-text">
                                        Learn HTML, CSS, JS to build modern websites.
                                    </p>
                                    <a href="/courses/web-development" className="btn btn-light">Explore Course</a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div className="card mb-3" style={cardStyles.card2}>
                                <img src="images/machine.jpg" className="card-img-top fixed-img" alt="Data Science" />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ fontWeight: "bold" }}>Data Science</h3>
                                    <p className="card-text">
                                        Master Python, Machine Learning, and AI to analyze data.
                                    </p>
                                    <a href="/courses/data-science" className="btn btn-light">Explore Course</a>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div className="card mb-3" style={cardStyles.card3}>
                                <img src="images/cs.jpeg" className="card-img-top fixed-img" alt="Cybersecurity" />
                                <div className="card-body">
                                    <h3 className="card-title" style={{ fontWeight: "bold" }}>Cybersecurity</h3>
                                    <p className="card-text">
                                        Learn ethical hacking, network security, and risk management.
                                    </p>
                                    <a href="/courses/cybersecurity" className="btn btn-light">Explore Course</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Teachers />


                    {/* Commonly Asked Questions - Accordion */}
                    <div className="my-5">
                        {/* <h3 className="text-center mb-4">Commonly Asked Questions</h3> */}

                        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                            <div style={{
                                background: "linear-gradient(135deg, #e9d5ff, #d8b4fe)", // Soft lavender gradient
                                borderRadius: "80px",
                                padding: "20px",
                                textAlign: "center",
                                width: "300px"
                            }}>
                                <h2
                                    className="text-center fw-bold"
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        color: "#222",
                                        margin: "0",
                                        fontSize:"18px",
                                     
                                    }}
                                >
                                    Commonly Asked Questions
                                </h2>
                              
                            </div>
                        </div>

                        <div className="accordion" id="faqAccordion">
                            {/* Question 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{ fontSize: '24px' }}>
                                        What is Artificial Intelligence?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Artificial Intelligence (AI) refers to the ability of computer systems to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making.
                                    </div>
                                </div>
                            </div>

                            {/* Question 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{ fontSize: '24px' }}>
                                        What is Data Science?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Data Science involves analyzing and interpreting complex data using Python, Machine Learning, and AI.
                                    </div>
                                </div>
                            </div>

                            {/* Question 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{ fontSize: '24px' }}>
                                        What is Cybersecurity?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Cybersecurity focuses on protecting systems, networks, and programs from digital attacks.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );






};

export default Home;
