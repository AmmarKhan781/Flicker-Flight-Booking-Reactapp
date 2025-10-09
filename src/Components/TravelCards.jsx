import React from "react";
import bali from "../assets/bali.png";
import swiss from "../assets/swiss.png";
import boracay from "../assets/boracay.png";
import palawan from "../assets/palawan.png";
import "./TravelCards.css";

const TravelCards = () => {
  const trips = [
    { country: "Bali", days: "4D3N", price: "$899", img: bali },
    { country: "Swiss", days: "6D5N", price: "$900", img: swiss },
    { country: "Boracay", days: "5D4N", price: "$699", img: boracay },
    { country: "Palawan", days: "4D3N", price: "$789", img: palawan },
  ];

  return (
    <div className="travel-card-container">
      {trips.map((trip, index) => (
        <div className="travel-card3" key={index}>
          <img src={trip.img} alt={trip.country} className="card-img3" />
          <div className="card-info3">
            <div>
              <h3 className="country3">{trip.country}</h3>
              <p className="days3">{trip.days}</p>
            </div>
            <span className="price3">{trip.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelCards;
