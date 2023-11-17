

import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";

const FindParking = () => {
  const [address, setAddress] = useState("");
  const [spots, setSpots] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.airgarage.com/spots", {
        params: { address },
      });
      setSpots(response.data.results);
      setError(null);
    } catch (error) {
      setError(error.message);
      setSpots([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar isFindParkingPage={true}/>
      <h1>Find Parking</h1>
      <form onSubmit={handleSearch}>
        <label>
          Where do you want to park?
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <p>Error: {error}</p>}
      <ul>
        {spots.map((spot) => (
          <li key={spot.uuid}>{spot.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindParking;
