
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import FindParking from './pages/FindParking.jsx';
import CustomerSupport from './pages/CustomerSupport.jsx';
import Login from './pages/Login.jsx';
import DynamicPricing from './pages/Capabilities/DynamicPricing.jsx';

import LicensePlateRecognition from './pages/Capabilities/LicensePlateRecognition.jsx';
import EnhancedEnforcement from './pages/Capabilities/EnhancedEnforcement.jsx';
import Management from './pages/Capabilities/Management.jsx';
import AdvertisingPartners from './pages/Capabilities/AdvertisingPartners.jsx';
import IntelligenceDashboard from './pages/Capabilities/IntelligenceDashboard.jsx';

import ParkingLots from './pages/UseCases/ParkingLots.jsx';
import ParkingGarages from './pages/UseCases/ParkingGarages.jsx';
import OffAirport from './pages/UseCases/OffAirport.jsx';
import MixedUseProperties from './pages/UseCases/MixedUseProperties.jsx';
import Hotels from './pages/UseCases/Hotels.jsx';

import TowerInvestments from './pages/CaseStudies/TowerInvestments.jsx';
import WestLake from './pages/CaseStudies/WestLake.jsx';
import TheYard from './pages/CaseStudies/TheYard.jsx';
import WestinHotel from './pages/CaseStudies/WestinHotel.jsx';
import ChurchAndCarriage from './pages/CaseStudies/ChurchAndCarriage.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-parking" element={<FindParking />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/capabilities/dynamicpricing" element={<DynamicPricing />} />
        <Route path="/capabilities/licenseplaterecognition" element={<LicensePlateRecognition />} />

        <Route path="/capabilities/enhancedenforcement" element={<EnhancedEnforcement />} />
        <Route path="/capabilities/management" element={<Management />} />
        <Route path="/capabilities/advertisingpartners" element={<AdvertisingPartners />} />
        


        <Route path="/capabilities/intelligencedashboard" element={<IntelligenceDashboard />} />


        <Route path="/use-cases/parkinglots" element={<ParkingLots />} />
        <Route path="/use-cases/parkinggarages" element={<ParkingGarages />} />
        <Route path="/use-cases/offairport" element={<OffAirport />} />
        <Route path="/use-cases/mixeduseproperties" element={<MixedUseProperties />} />
        <Route path="/use-cases/hotels" element={<Hotels />} />
        
        <Route path="/case-studies/towerinvestments" element={<TowerInvestments />} />
        <Route path="/case-studies/westlake" element={<WestLake />} />
        <Route path="/case-studies/theyard" element={<TheYard />} />
        <Route path="/case-studies/westinhotel" element={<WestinHotel />} />
        <Route path="/case-studies/churchandcarriage" element={<ChurchAndCarriage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
