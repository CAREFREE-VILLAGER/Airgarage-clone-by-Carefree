import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import './CustomerSupport.css';

const CustomerSupport = () => {
  return (
    <div>
      <Navbar showNavbar={true} isCustomerSupportPage={true} />
      <div className="customer-support-container">
        <div className="help-center-box">
          <h1>AirGarage Driver Support Center</h1>
          <p>How can we help?</p>
          <input type="text" placeholder="Enter your question here to see relevant help center articles" />
        </div>

        <div className="support-options-box">
          <div className="support-option">
            <h2>Driver Support Center</h2>
            <p>Learn how to make changes to your parking rental and find answers to our most common driver questions.</p>
          </div>

          <div className="support-option">
            <h2>Violation Support</h2>
            <p>If you received a parking violation or your car was towed/immobilized, you can find the answers to your questions here.</p>
          </div>

          <div className="support-option">
            <h2>Location Rentals</h2>
            <p>If you'd like to rent an AirGarage location for a private event, oversized vehicle parking, or fleet storage, you can find information here.</p>
          </div>
        </div>

        <div className="faq-section-box">
          <h2>FAQs</h2>
          <ul>
            <li>I received a parking violation that I shouldn’t have.</li>
            <li>I forgot to end my parking rental.</li>
            <li>I don’t know how to end my parking rental.</li>
            <li>I need to update or edit my license plate number on an existing rental.</li>
            <li>I want to reserve an AirGarage location for a private event.</li>
            <li>I need to update or change my payment method.</li>
            <li>Why was my rental auto-started? What is a convenience fee?</li>
          </ul>
        </div>

        <div className="trending-articles-box">
          <h2>Trending Articles</h2>
          <ul>
            <li>I forgot to end my parking rental.</li>
            <li>I want to pay my parking violation.</li>
            <li>I don’t know how to end my parking rental.</li>
            <li>I received a parking violation that I shouldn’t have.</li>
            <li>Can I pay to park for multiple days?</li>
            <li>I am unable to pay.</li>
            <li>I want to extend my parking rental.</li>
          </ul>
        </div>

        <div className="back-to-top-box">
          <p>AirGarage Help Center</p>
          <a href="#">Back to top</a>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
