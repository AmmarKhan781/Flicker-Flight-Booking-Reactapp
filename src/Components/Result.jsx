import React from "react";
import "./FlightSearch.css";
import pic33 from "../assets/Duration.png";
const FlightSearch = () => {
  const flights = [
    {
      airline: "Turkish Airlines",
      depTime: "11:35 PM",
      arrTime: "4:45 PM",
      from: "SIN",
      to: "LAX",
      duration: "33H 10M, 1-stop",
      price: "S$ 723",
      air: "Turkish Airlines",
    },
    {
      airline: "Singapore Airlines",
      depTime: "8:45 PM",
      arrTime: "7:55 PM",
      from: "SIN",
      to: "LAX",
      duration: "15H 10M, 2-stops",
      price: "S$ 900",
      air: "Singapore Airlines",
    },
    {
      airline: "Japan Airlines",
      depTime: "8:20 PM",
      arrTime: "9:50 PM",
      from: "SIN",
      to: "LAX",
      duration: "17H 30M, 1-stop",
      price: "S$ 859",
      air: "Japan Airlines",
    },
    {
      airline: "ANA",
      depTime: "6:35 PM",
      arrTime: "9:50 PM",
      from: "SIN",
      to: "LAX",
      duration: "19H 15M, 1-stop",
      price: "S$ 936",
      air: "ANA",
    },
    {
      airline: "American Airlines",
      depTime: "8:20 PM",
      arrTime: "9:50 PM",
      from: "SIN",
      to: "LAX",
      duration: "17H 30M, 1-stop",
      price: "S$ 936",
      air: "American Airlines",
    },
    {
      airline: "Turkish Airlines",
      depTime: "11:35 PM",
      arrTime: "4:45 PM",
      from: "SIN",
      to: "LAX",
      duration: "33H 10M, 1-stop",
      price: "S$ 673",
      air: "Turkish Airlines",
    },
    {
      airline: "Japan Airlines",
      depTime: "10:25 PM",
      arrTime: "9:10 AM",
      from: "SIN",
      to: "LAX",
      duration: "26H 45M, 1-stop",
      price: "S$ 859",
      air: "Japan Airlines",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="title">Where are you off to?</h1>
        <div className="box">
          <div className="form">
            <div className="field">
              <label>Departure</label>
              <input
                type="text"
                placeholder="Departure"
                defaultValue="Singapore (SIN)"
                className="input"
              />
            </div>

            <div className="field">
              <label>Arrival</label>
              <input
                type="text"
                placeholder="Arrival"
                defaultValue="Los Angeles (LA)"
                className="input"
              />
            </div>

            <div className="field">
              <label>Date</label>
              <input type="date" defaultValue="2022-01-05" className="input" />
            </div>

            <button className="btn">SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
      <div className="fl-container">
        <div className="fl-left">
          <p>10 out of 177 Results</p>
          <h4>Stops</h4>
          <div className="fl-filter">
            <input type="checkbox" /> 1 Stop
          </div>
          <div className="fl-filter">
            <input type="checkbox" /> 2 Stops
          </div>
          <h4>Booking Options</h4>
          <div className="fl-filter">
            <input type="checkbox" /> Book on Fickleflight
          </div>
          <div className="fl-filter">
            <input type="checkbox" /> Official Airline Websites
          </div>
          <h4>Flight Experience</h4>
          <div className="fl-filter">
            <input type="checkbox" /> No overnight flights
          </div>
          <div className="fl-filter">
            <input type="checkbox" /> No long stop-overs
          </div>
          <h4>Airlines</h4>
          <div className="fl-filter">
            <input type="checkbox" /> Singapore Airlines
          </div>
          <div className="fl-filter">
            <input type="checkbox" /> Qatar Airways
          </div>
        </div>

        <div className="fl-center">
          <p className="pta">10 out of 177 Results</p>
          {flights.map((flight, index) => (
            <div key={index} className="fl-card">
              <div>{flight.air}</div>
              <div className="setme">
                <div className="rec-flights1">
                  <div className="from">
                    <p>{flight.depTime}</p>
                    <img src={pic33} alt="From" />
                    <p>{flight.arrTime}</p>
                  </div>
                </div>
                <div className="fl-info">
                  <p>{flight.from}</p>
                  <p>{flight.duration}</p>
                  <p>{flight.to}</p>
                </div>
              </div>
              <div className="fl-price">{flight.price}</div>
            </div>
          ))}
          <button className="fl-more">Show more results</button>
        </div>

        <div className="fl-right">
          <h4>Recently Booked</h4>
          <div className="fl-booked">
            <p>Singapore Airlines - $1128</p>
            <p>SIN ➔ LAX</p>
          </div>
          <div className="fl-booked">
            <p>American Airlines - $1024</p>
            <p>SFO ➔ SIN</p>
          </div>
          <div className="fl-booked">
            <p>Japan Airlines - $2996</p>
            <p>PHX ➔ DXB</p>
          </div>
          <button className="fl-more1">Show more ↓</button>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
