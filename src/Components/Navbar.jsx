import React from "react";
import "../Components/navbar.css";
import log from "../assets/flightlogo.png";
import not from "../assets/notification-icon.png";
import pp from "../assets/dp.avif";

const Navbar = ({ setPage ,col}) => {
  return (
    <div className="in-header">
      <img src={log} alt="Flight Logo" className="logo" />
      <div className="nav-link">
        <p onClick={() => setPage("explore")}>Explore</p>
        <p onClick={() => setPage("search")}>Search</p>
        <p onClick={() => setPage("hotels")}>Hotels</p>
        <p onClick={() => setPage()}>Offers</p>
        <div className="nav-img">
          <img className="not-pp1" src={not} alt="Notification Icon" />
          <img className="not-pp" src={pp} alt="Profile pic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
