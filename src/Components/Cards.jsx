import React, { useState } from "react";
import paris from "../assets/ParisImage.png";
import greece from "../assets/GreeceImage.png";
import norway from "../assets/NorwayImage.png";
import tuscany from "../assets/TuscanyImage.png";
import "./Cards.css";

const Cards = () => {
  const [details, setDetails] = useState([
    { c: "Paris", f: "From", p: "$699", loc: paris },
    { c: "Greece", f: "From", p: "$1079", loc: greece },
    { c: "Norway", f: "From", p: "$895", loc: norway },
    { c: "Tuscany", f: "From", p: "$1245", loc: tuscany },
  ]);

  return (
    <div className="card-container4">
      {details.map((item, index) => (
        <div
          className="card4"
          key={index}
          style={{
            backgroundImage: `url(${item.loc})`,
            cursor: "pointer",
          }}
        >
          <div className="card-content4">
            <h3>{item.c}</h3>
            <div className="dettt2">
              <p>{item.f}</p>
              <h1> {item.p}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
