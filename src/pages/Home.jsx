import React, { useState } from 'react';
import ContactForm from '../Components/Form/ContactForm';
import './Home.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Components/Navbar/Navbar';

import image1 from '../Components/Photo/image1.png'; 
import image2 from '../Components/Photo/image2.png'; 
import image3 from '../Components/Photo/image3.png';
import image4 from '../Components/Photo/image4.png';
import image5 from '../Components/Photo/image5.png';
import image6 from '../Components/Photo/image6.png';
import image7 from '../Components/Photo/image7.png';
import slider1 from '../Components/Photo/slider1.PNG';
import slider2 from '../Components/Photo/slider2.PNG';
import slider3 from '../Components/Photo/slider3.PNG';
import slider4 from '../Components/Photo/slider4.PNG';



const handleGetProposalClick = () => {

  const contactFormElement = document.getElementById('contact-form');
  if (contactFormElement) {
    contactFormElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Box7 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontFamily: 'Outfit, sans-serif', color:'white' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
      <h1 style={{ fontSize:'35px'}}>Built On Trust</h1>
          <p style={{ fontSize:'20px'}}>
          Owners, Asset Managers, 
          and Property Managers select AirGarage for its best in class user experience,
          <br></br> revenue growth, security and transparency.
          </p>
        <img src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/63e41fbc1b58a574fb230af9_Group%201171275804.png" alt=" Description" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};


const Box6 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div style={{ textAlign: 'left', padding: '20px', maxWidth: '800px', display: 'flex', alignItems: 'center' }}>
      <div>
          <h4 style={{ color:'red' }}>LOCAL PRESENCE, NATIONWIDE REACH</h4>
          <h1 style={{ fontSize:'35px'}}>America's Fastest Growing Parking Management Company</h1>
          <p>
We manage parking facilities across 40+ states, with new cities launching every week. 
To get started click the proposal link below, and we’ll be in touch with you soon! 
          </p>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <img src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/63eebe2e2a42f878bbc15e9d_Frame%201000002592-p-500.png" alt=" Description"  style={{ maxWidth: '150%', height: 'auto', maxHeight: '400px'}} />
        </div>
      </div>
    </div>
  );
};


const box5Style = {
  backgroundColor: 'whitesmoke',
  
};

const ImageSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  const images = [slider1, slider2, slider3, slider4];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slider-box" key={index}>
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


 
 
 
 <button onClick={handleGetProposalClick}>Get A Proposal</button>




const Home = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  








  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar showNavbar={true} isHomePage={true} />

    <div>
      <section className="box-section box1">
        <h1 style={{ margin: '0', fontSize: '50px', fontFamily: 'Outfit, sans-serif', color:'white' }}>Full Service Parking<br></br> Management</h1>
        <h3 style={{  fontFamily: 'Outfit, sans-serif', color:'white' }}>AirGarage manages parking properties, handling everything from 
          payments to <br></br> enforcement and more to increase revenue for owners.</h3>
          <button className="proposal-button" onClick={handleGetProposalClick}>Get A Proposal</button>
          <br></br>
        <div className="marquee">
          <br></br>
          <div className="marquee-content">
            <span className="item-collection-1">
              <span className="item1"><img src={image1} height="80" alt='' /></span>
              
              <span className="item1"><img src={image2} height="80" alt='' /></span>
              <span className="item1"><img src={image3} height="80" alt='' /></span>
              <span className="item1"><img src={image4} height="80" alt='' /></span>
              <span className="item1"><img src={image5} height="80" alt='' /></span>
              <span className="item1"><img src={image6} height="80" alt='' /></span>
              <span className="item1"><img src={image7} height="80" alt='' /></span>
              
            </span>
           
            <span className="item-collection-2">
            <span className="item1"><img src={image1} height="80" alt='' /></span>
             <span className="item1"><img src={image2} height="80" alt='' /></span>
              <span className="item1"><img src={image3} height="80" alt='' /></span>
              <span className="item1"><img src={image4} height="80" alt='' /></span>
              <span className="item1"><img src={image5} height="80" alt='' /></span>
              <span className="item1"><img src={image6} height="80" alt='' /></span>
              <span className="item1"><img src={image7} height="80" alt='' /></span>
           </span>


          </div>
        </div>
      </section>

      
      
     
      
     
<section className="box-section box2">
 <div style={{ width: '100%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'black' }}>
    <h1 style={{ margin: '0', fontSize: '40px' ,fontFamily: 'Outfit, sans-serif' }}>Maximize Your NOI with AirGarage</h1>
    <h3 style={{ margin: '0',fontFamily: 'Outfit, sans-serif' }}>The average property owner that switches to AirGarage from a legacy</h3>
    <h3 style={{ margin: '0',fontFamily: 'Outfit, sans-serif' }}>parking operator sees a 23% NOI increase in the first year.</h3>
  </div>
  <br></br> <br></br>
  <div className="tabs-container">
    
    <div
      className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab1')}
    >
      <span className={`active-text ${activeTab === 'tab1' ? 'underline' : ''}`}>
      <p style={{fontFamily: 'Outfit, sans-serif'}}>Optimize Revenue per Vehicle</p>
      </span>
    </div>

    {/* Tab 2 */}
    <div
      className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab2')}
    >
      <span className={`active-text ${activeTab === 'tab2' ? 'underline' : ''}`}>
        <p style={{fontFamily: 'Outfit, sans-serif'}}>Increase Traffic</p>
      </span>
    </div>

    {/* Tab 3 */}
    <div
      className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab3')}
    >
      <span className={`active-text ${activeTab === 'tab3' ? 'underline' : ''}`}>
       <p style={{fontFamily: 'Outfit, sans-serif'}}> Decrease Overload </p>
      </span>
    </div>
  </div>

  <div className="tab-content">
    <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
      <h2 style={{fontFamily: 'Outfit, sans-serif'}}>Dynamic Pricing</h2>
      <div className="content-wrapper">
      <p style={{fontFamily: 'Outfit, sans-serif'}}>Traffic at your property fluctuates depending on time of day, day of the week. seasonality, and nearby events.<br></br>
      <br></br>
AirGarage analyzes real time parking traffic and automatically adjusts rates to match demand to help you maximize revenue
during peak hours and increase demand during slower periods.</p>

        
        <img src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/654434fa86ff332691441a15_dyn-p-1-p-500.png" alt="Description" className="right-aligned-image" />
      </div>
    </div>

    <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
      <h2 style={{fontFamily: 'Outfit, sans-serif'}}>Increase Online Visibility</h2>
      <div className="content-wrapper">
      <p style={{fontFamily: 'Outfit, sans-serif'}}>
AirGarage boosts online visibility for parking owners by listing locations on parking demand aggregator 
sites and creating an SEO-optimized website for your parking location.
<br></br>

Enhancing search-ability through SEO and targeted marketing can leverage mobile apps and integrations with other services to attract drivers.</p>

        
        <img src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/63d31d5af3116276b62d1c47_Group%201171275771-p-500.png" alt="Description" className="right-aligned-image" />
      </div>
    </div>

    <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`}>
      <h2 style={{fontFamily: 'Outfit, sans-serif'}}>Streamlined Operations</h2>
      <div className="content-wrapper">
      <p style={{fontFamily: 'Outfit, sans-serif'}}> 
While most parking companies patch together different systems and pass on inflated costs to owners,
 AirGarage aligns incentives and builds our technology in house.<br></br>
‍We provide a suite of tools that handle everything from payment processing to enforcement, allowing
 owners to efficiently run their parking operations with minimal manual intervention.</p>
 <img src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/6446d193f45cf31ba7343e5e_Screen%20Shot%202023-04-24%20at%2011.59.26%20AM-p-500.png" alt="Description" className="right-aligned-image" />
      </div>
    </div>
  </div>
</section>



      
      <section className="box-section box3">
        
      <div style={{ display: 'flex', height: '100px' }}>
  <div style={{ width: '30%', background: '#d1581f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
    <h1 style={{margin:'0',fontFamily: 'Outfit, sans-serif'}}>2,200,000+</h1>
    <h4 style={{ margin: '0' }}>Cars Parked</h4>
  </div>
  <div style={{ width: '40%', background: '#d1581f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
    <h1 style={{margin:'0',fontFamily: 'Outfit, sans-serif'}}>40+</h1>
    <h4 style={{margin:'0',fontFamily: 'Outfit, sans-serif'}}>States in Operation</h4>
  </div>
  <div style={{ flex: 1, background: '#d1581f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
    <h1 style={{margin:'0',fontFamily: 'Outfit, sans-serif'}}>37,000+</h1>
    <h4 style={{margin:'0',fontFamily: 'Outfit, sans-serif'}}>Spots Under Management</h4>
  </div>
</div>
 </section>

 <section className="box-section box4">
  <div className="containerbox4">
  <div className="box">
  <div className="content-wrapper">
    <img
      src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/64f0d46cf95c2e92313e4da6_Group%201171275913.png"
      alt="Description"
      className="right-aligned-image"
    />
    <div className="text-content">
      <h1 style={{fontFamily: 'Outfit, sans-serif'}}>Maximized Revenue with Dynamic Pricing</h1>
      <h4 style={{fontFamily: 'Outfit, sans-serif'}}>
        AirGarage automatically adjusts rates based on the real-time occupancy
        of your parking facility. Optimizing rates helps to capture more
        revenue from drivers during peak hours and drive more traffic during
        slower periods.
      </h4>
      <ul>
        <li>Increase revenue and occupancy</li>
        <li>Advanced analytics to drive continuous improvement</li>
        <li>Reduce parking lot or garage congestion</li>
      </ul>
    </div>
  </div>
</div>

<div className="box">
  <div className="content-wrapper">
    <div className="text-content">
      <h1>Increased Online Visibility</h1>
      <h4>
        Online visibility is essential to keeping your parking garage profitable.
        AirGarage ensures your properties are visible to drivers looking for parking options in your area.
      </h4>
      <ul>
        <li>Integrations with the largest parking marketplaces</li>
        <li>Improved customer visibility</li>
        <li>Centralized, real-time reporting and analytics.</li>
      </ul>
    </div>
    <img
      src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/643fe92e29f1436044739647_airgarage_online_visibility-p-500.webp"
      alt="Description"
      className="right-aligned-image"
    />
  </div>
</div>

  
    <div className="box">
      <div className="content-wrapper">
    <img
      src="https://assets-global.website-files.com/5d55f1425cb6b7a18aa77528/643f2f92b245e0aeef3e4582_bcc50fd2-1f4d-4aea-876b-23db2dc517d6-p-500.jpg"
      alt="Description"
      className="right-aligned-image"
    />
    <div className="text-content">
      <h1>Maximized Revenue with Dynamic Pricing</h1>
      <h4>
        AirGarage automatically adjusts rates based on the real-time occupancy
        of your parking facility. Optimizing rates helps to capture more
        revenue from drivers during peak hours and drive more traffic during
        slower periods.
      </h4>
      <ul>
        <li>Increase revenue and occupancy</li>
        <li>Advanced analytics to drive continuous improvement</li>
        <li>Reduce parking lot or garage congestion</li>
      </ul>
    </div>
  </div></div>
  </div>
</section>


        <section className="box-section box5" style={box5Style}>
          <h3 className='centered-text' style={{ color:'red' }}>AIRGARAGE PARTNER TESTIMONIALS</h3>
        <h1 className="centered-text" style={{ margin: '0', fontSize: '35px' }}>
        See Why Parking Garage<br></br> Owners Are Switching</h1>

        <h3 className='centered-text'>Parking garage owners are switching to AirGarage for increased revenue, <br></br>
        improved user experience, and streamlined operations. Maximize your parking facilities<br></br>
         potential with AirGarage’s full-service management.</h3>
      

        <ImageSlider />
        </section>

        <section className='box-section box6' style={{ height: '300px' }}>
        <Box6 />
      </section>
           

      <section className='box-section box7' style={{ height: '400px', backgroundColor: '#d1581f' }}>
        <Box7 />
      </section>

      <section id="contact-form" className="proposal-form-section">
  <ContactForm />
</section>


     </div>
    </div>
  );
};

export default Home;
