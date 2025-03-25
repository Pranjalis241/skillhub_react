import React, { Component } from 'react';
import styles from './Registration.module.css';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      showTooltip: false,
      nameError: '',
      emailError: ''
    };
  }

  // Handle input changes
  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Validate form fields
  validateForm = () => {
    let nameError = '';
    let emailError = '';

    // Name validation (minimum 3 letters)
    if (this.state.name.length < 3) {
      nameError = 'Name must be at least 3 letters';
    }

    // Email validation (must contain @)
    if (!this.state.email.includes('@')) {
      emailError = 'Email must contain @';
    }

    if (nameError || emailError) {
      this.setState({ nameError, emailError });
      return false;
    }

    return true;
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    //  Clear form after successful submission
    e.target.reset(); // ✔ Refresh the form 

    // ✅ Reset state also
    this.setState({
      name: '',
      email: '',
      showTooltip: false,
      nameError: '',
      emailError: ''
    });

    alert('Form submitted successfully!');
  };

  render() {
    const { name, email, nameError, emailError } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          
          {/* Name Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.changeHandler}
              placeholder="Enter your name"
              className={styles.input}
            />
            <div className={styles.error}>{nameError}</div>
          </div>

          {/* Email Field */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.changeHandler}
              placeholder="Enter your email"
              className={styles.input}
            />
            <div className={styles.error}>{emailError}</div>
          </div>

          {/* Submit Button */}
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.button}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;