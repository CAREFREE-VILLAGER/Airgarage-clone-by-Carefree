
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Airgarage.com</Link>
        <div className="footer-section">
          <h4>Capabilities</h4>
          <ul>
            <li><Link to="/capabilities/dynamicpricing">Dynamic Pricing</Link></li>
            <li><Link to="/capabilities/licenseplaterecognition">License Plate Recognition</Link></li>
            <li><Link to="/capabilities/enhancedenforcement">Enhanced Enforcement</Link></li>
            <li><Link to="/capabilities/management">Management</Link></li>
            <li><Link to="/capabilities/advertisingpartners">Advertising Partners</Link></li>
            <li><Link to="/capabilities/intelligencedashboard">Intelligence Dashboard</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Use Cases</h4>
          <ul>
            <li><Link to="/use-cases/parkinglots">Parking Lots</Link></li>
            <li><Link to="/use-cases/parkinggarages">Parking Garages</Link></li>
            <li><Link to="/use-cases/offairport">Off Airport</Link></li>
            <li><Link to="/use-cases/mixeduseproperties">Mixed Use Properties</Link></li>
            <li><Link to="/use-cases/hotels">Hotels</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Case Studies</h4>
          <ul>
            <li><Link to="/case-studies/towerinvestments">Tower Investments</Link></li>
            <li><Link to="/case-studies/westlake">West Lake</Link></li>
            <li><Link to="/case-studies/theyard">The Yard</Link></li>
            <li><Link to="/case-studies/westinhotel">Westin Hotel</Link></li>
            <li><Link to="/case-studies/churchandcarriage">Church & Carriage</Link></li>
          </ul>
        </div>
        <Link to="/find-parking">Find Parking</Link>
        <Link to="/customer-support">Customer Support</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="footer-info">
        
      </div>
    </footer>
  );
};

export default Footer;
