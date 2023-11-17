import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [howCanWeHelp, setHowCanWeHelp] = useState(''); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      firstName,
      lastName,
      businessEmail,
      phoneNumber,
      address,
      industryType,
      howCanWeHelp,
    });
    
    resetForm();
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'businessEmail':
        setBusinessEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'industryType':
        setIndustryType(value);
        break;
      case 'howCanWeHelp': 
        setHowCanWeHelp(value);
        break;
      default:
        break;
    }
  };

 
  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setBusinessEmail('');
    setPhoneNumber('');
    setAddress('');
    setIndustryType('');
    setHowCanWeHelp(''); 
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <div className="input-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="businessEmail">Business Email:</label>
        <input
          type="email"
          id="businessEmail"
          name="businessEmail"
          value={businessEmail}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="industryType">Industry Type:</label>
        <select
          id="industryType"
          name="industryType"
          value={industryType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Industry</option>
          <option value="industry1">Industry 1</option>
          <option value="industry2">Industry 2</option>
          {/* Add more industry options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="howCanWeHelp">How can we Help:</label>
        <textarea
          id="howCanWeHelp"
          name="howCanWeHelp"
          value={howCanWeHelp}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">GET A PROPOSAL</button>
    </form>
  );
};

export default ContactForm;
