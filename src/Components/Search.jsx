import React, { useState } from "react";
import "../Components/search.css";
import pic33 from "../assets/Duration.png";
import hot from "../assets/Hotel Icon.png";
import attract from "../assets/Attractions Icon.png";
import taxi from "../assets/Taxi icon.png";
import movies from "../assets/Movies icon.png";
import eats from "../assets/Movies Icon.png";
import commute from "../assets/Commute icon.png";
import img22 from "../assets/Group.png";
import Cards from "./Cards";
import TravelCards from "./TravelCards";
import HotelCards from "../Components/HotelCards.jsx";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <div className="heing">
          <h1>Let's explore & travel the world</h1>
          <p className="ppppp">
            Find the best destinations and the most popular stays!
          </p>
        </div>

        <div className="mainf1">
          <div className="sear">
            <label htmlFor="tr" className="s">
              SEARCH FLIGHTS
            </label>
            <div className="rad2">
              <label>
                <input id="tr" type="radio" name="trip" value="Return" /> Return
              </label>
              <label>
                <input type="radio" name="trip" value="One-way" /> One-way
              </label>
            </div>
          </div>

          <div className="inp">
            <div className="field">
              <label className="lab2" htmlFor="Departure">
                Departure
              </label>
              <input
                className="ii"
                type="text"
                id="Departure"
                placeholder="Country"
              />
            </div>

            <div className="field">
              <label className="lab2" htmlFor="Arrival">
                Arrival
              </label>
              <input
                type="text"
                className="ii"
                id="Arrival"
                placeholder="Country"
              />
            </div>

            <div className="field">
              <label className="lab2" htmlFor="date">
                Date
              </label>
              <input type="date" className="ii" id="date" />
            </div>

            <button className="but-flights">SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>

      <div className="home-sec1">
        <div className="div1">
          <div className="rec">
            <p>RECENT SEARCHES</p>
          </div>

          <div className="dep">
            <div className="rec-flights">
              <div className="from1">
                <p>SIN</p>
                <img src={pic33} alt="From" />
                <p>LAX</p>
              </div>
              <p>
                <b>Depart on</b>: 7 sep 2021
              </p>
            </div>

            <div className="rec-flights">
              <div className="from1">
                <p>MY</p>
                <img src={pic33} alt="From" />
                <p>DUB</p>
              </div>
              <p>
                <b>Depart on</b>: 9 sep 2021
              </p>
            </div>
          </div>

          <p className="PPP">PREPARE FOR YOUR TRIP</p>

          <div className="prep">
            <div className="pre1">
              <img src={hot} alt="Hotel" />
              <p>Hotel</p>
            </div>
            <div className="pre1">
              <img src={attract} alt="Attractions" />
              <p>Attractions</p>
            </div>
            <div className="pre1">
              <img src={eats} alt="Eats" />
              <p>EATS</p>
            </div>
            <div className="pre1">
              <img src={commute} alt="Commute" />
              <p>Commute</p>
            </div>
            <div className="pre1">
              <img src={taxi} alt="Taxi" />
              <p>Taxi</p>
            </div>
            <div className="pre1">
              <img src={movies} alt="Movies" />
              <p>Movies</p>
            </div>
          </div>
        </div>

        <div className="hea">
          <div>
            <p>Plan your next trip</p>
            <h3>Most Popular Destinations</h3>
          </div>
          <div className="rec2">
            <p>View all destinations</p>
            <img className="imghh" src={img22} alt="arrow" />
          </div>
        </div>

        <Cards />

        <div className="hea">
          <h3>Recommended Holidays</h3>
          <div className="rec2">
            <p>View all holidays</p>
            <img src={img22} className="imghh" alt="arrow" />
          </div>
        </div>

        <TravelCards />

        <div className="hea">
          <h3>Popular Stays</h3>
          <div className="rec2">
            <p>View all stays</p>
            <img src={img22} className="imghh" alt="arrow" />
          </div>
        </div>

        <HotelCards />
      </div>
    </>
  );
};

export default Search;
