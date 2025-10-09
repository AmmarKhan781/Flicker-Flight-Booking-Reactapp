import React from "react";
import matterhorn from "../assets/matterhorn.png";
import discovery from "../assets/discovery.png";
import arctic from "../assets/arctic.png";
import lake from "../assets/lake.png";
import "./HotelCards.css";

const HotelCards = () => {
  const hotels = [
    {
      title: "Matterhorn Suites",
      roomType: "Entire bungalow",
      price: "$575/night",
      rating: 4.9,
      reviews: 60,
      img: matterhorn,
    },
    {
      title: "Discovery Shores",
      roomType: "2-Story beachfront suite",
      price: "$360/night",
      rating: 4.8,
      reviews: 116,
      img: discovery,
    },
    {
      title: "Arctic Hut",
      roomType: "Single deluxe hut",
      price: "$420/night",
      rating: 4.7,
      reviews: 78,
      img: arctic,
    },
    {
      title: "Lake Louise Inn",
      roomType: "Deluxe King Room",
      price: "$244/night",
      rating: 4.6,
      reviews: 63,
      img: lake,
    },
  ];

  return (
    <div className="hotel-card-container">
      {hotels.map((hotel, index) => (
        <div className="hotelcard7" key={index}>
          <img src={hotel.img} alt={hotel.title} className="hotel-img2" />
          <div className="hotel-info2">
            <div>
            <p className="room-type2">{hotel.roomType}</p>
            <h3 className="hotel-title2">{hotel.title}</h3>
            <p className="price2">{hotel.price}</p>
            <div className="rating-review2">
              <span className="star2">⭐ {hotel.rating}</span>
              <a href="#" className="reviews2">
                ({hotel.reviews} reviews)
              </a>
            </div>
            <button className="details-btn2">MORE DETAILS</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCards;
