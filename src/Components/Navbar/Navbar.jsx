// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropMenu from '../DropMenu/DropMenu';
import './Navbar.css';

const handleGetProposalClick = () => {
  // Scroll to the contact form
  const contactFormElement = document.getElementById('contact-form');
  if (contactFormElement) {
    contactFormElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ showNavbar, isLoginPage, isHomePage, isCustomerSupportPage, isFindParkingPage }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {showNavbar && (
        
        <nav className={`media ${isLoginPage ? 'login-page-navbar' : ''} ${isHomePage ? 'home-page-navbar' : ''} ${isCustomerSupportPage ? 'customer-support-navbar' : ''} ${isFindParkingPage ? 'find-parking' : ''}`}>
  <ul className="navbar-list">
            <li className="logo">
              <Link to="/">
                <img
                  src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/5ff7de92714ca4713ab426d7_AirGarage%20Full%20White%20SVG-p-500.png"
                  style={{ width: '300px', height: 'auto' }}
                  alt="AirGarage Logo"
                />
              </Link>
            </li>

            <div className="dropdown-icon" onClick={toggleDropdown}>
              ☰
            </div>

            <ul className={`dropdown-items ${showDropdown ? 'show' : ''}`}>
              <li className="login-get-proposal with-padding">
                <DropMenu title="Capabilities" items={['Dynamic Pricing', 'License Plate Recognition', 'Enhanced Enforcement', 'Management', 'Advertising Partners', 'Intelligence DashBoard']} subRoutes="Capabilities" />
              </li>

              <li className="login-get-proposal with-padding">
                <DropMenu title="Use Cases" items={['Parking Lots', 'Parking Garages', 'Off Airport', 'Mixed Use Properties', 'Hotels']} subRoutes="UseCases" />
              </li>

              <li className="login-get-proposal with-padding">
                <DropMenu title="Case Studies" items={['Tower Investments', 'West Lake', 'The Yard', 'Westin Hotel', 'Church & Carriage']} subRoutes="CaseStudies" />
              </li>

              <li className="login-get-proposal with-padding"><Link to="/find-parking">Find Parking</Link></li>
              <li className="login-get-proposal with-padding"><Link to="/customer-support">Customer Support</Link></li>
              <li className="login-get-proposal"><Link to="/login">Login</Link></li>
              <li className="login-get-proposal"><button onClick={handleGetProposalClick}>Get A Proposal</button></li>
            </ul>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
