import React from "react";
import "./hotelpage.css";
import imgaa from "../assets/filter.png";
import ro from "../assets/r0.png";
import ri from "../assets/r1.png";
import rw from "../assets/r2.png";
import re from "../assets/r3.png";
import map from "../assets/Map.png";
const Hotelpage = () => {
  const hotels = [
    {
      image: ro,
      type: "1 king bed standard",
      name: "Holiday Inn Express",
      rating: "4.7",
      reviews: "1,136",
      price: "S$ 286",
    },
    {
      image: ri,
      type: "Bed in Quad",
      name: "Freehand Los Angeles",
      rating: "4.2",
      reviews: "1,941",
      price: "S$ 198",
    },
    {
      image: rw,
      type: "1 King, City view",
      name: "The Westin Bonaventure",
      rating: "4.1",
      reviews: "1,002",
      price: "S$ 289",
    },
    {
      image: re,
      type: "Deluxe King",
      name: "The Ritz-Carlton",
      rating: "4.7",
      reviews: "1,136",
      price: "S$ 286",
    },
  ];
  return (
    <>
      <div className="main33">
        <div>
          <h1>Stays in Los Angeles</h1>
          <div>
            <button className="but-sub1">Recommended</button>
            <button className="but-sub">Price</button>
            <button className="but-sub">Rating</button>
          </div>
        </div>
      </div>

      <div className="main22">
        <p>200+ RESULTS</p>
        <div className="main44">
          <p>Filters</p>
          <img src={imgaa} alt="" />
        </div>
      </div>
      <div className="last1">
        <div className="last">
          {hotels.map((hotel, _) => (
            <div className="hotel-card1">
              <img src={hotel.image} alt="hotel" className="hotel-image1" />
              <div className="hotel-details1">
                <p className="hotel-type1">{hotel.type}</p>
                <h3 className="hotel-name1">{hotel.name}</h3>
                <div className="hotel-rating1">
                  <span className="star1">⭐ {hotel.rating}</span>
                  <span className="reviews1">({hotel.reviews} reviews)</span>
                </div>
                <p className="hotel-price1">{hotel.price}/night</p>
                <button className="details-button1">View Details</button>
              </div>
            </div>
          ))}
              <img className="img88" src={map} alt="Map" />
        </div>
    
      </div>
    </>
  );
};

export default Hotelpage;
