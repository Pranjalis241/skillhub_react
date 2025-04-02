import React, { useState } from "react";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let errors = {};
    if (!contact.name.trim()) errors.name = "Name is required.";
    else if (contact.name.length < 3) errors.name = "Name must be at least 3 characters long.";
    else if (!/^[A-Za-z ]+$/.test(contact.name)) errors.name = "Name can only contain letters and spaces.";

    if (!contact.email.trim()) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(contact.email)) errors.email = "Enter a valid email address.";

    if (!contact.message.trim()) errors.message = "Message is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Your message has been sent successfully!");
      setContact({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ minHeight: '60vh', padding: '1px', fontSize: '24px' }} className="container py-5 contact-container">
      <div className="row g-5">
        {/* Left Section */}
        <div className="col-md-6 left-section">
          <h1>Get in touch with us</h1>
          <p>Don't hesitate to contact us for further details.</p>
          <p><strong>📞 +123 456 7890</strong></p>
          {/* unicode  */}
          <p><strong>✉️ contact.skillhub.com</strong></p>
          <p><strong>📍 Impelsys, IWF Campus, Mahadevapura, Bengaluru, Karnataka</strong></p>
          <div className="ratio ratio-16x9">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1266607020324!2d77.69576141534033!3d12.991702518929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1275a70d0e27%3A0x27b70493f83f5dc9!2sImpelsys!5e0!3m2!1sen!2sin!4v1689081946072!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 right-section">
          <form onSubmit={handleSubmit} style={{ paddingTop: "40px" }}> {/*form*/}
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name*</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger mt-1">{errors.name}</small>}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email*</label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
              {errors.email && <small className="text-danger mt-1">{errors.email}</small>}
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message*</label>
              <textarea
                id="message"
                className="form-control"
                name="message"
                rows="5"
                value={contact.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="text-danger mt-1">{errors.message}</small>}
            </div>

            {/* Success Message */}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            {/* Submit Button */}
            <button type="submit" className="btn w-100 custom-primary">Send</button>
            <button type="button" className="btn w-100 mt-2 custom-secondary" onClick={() => setContact({ name: "", email: "", message: "" })}>
              Refresh
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;