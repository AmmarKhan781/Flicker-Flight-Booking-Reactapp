import React from "react";
import "../Components/footer.css";
import symbols from "../assets/Symbols.png";
import social from "../assets/social-icon.png";
import separator from "../assets/Seperator.png";
const Footer = () => {
  return (
    <>
      <div className="news-div">
        <div className="form-div">
          <div className="te">
            <p className="p1">SUBSCRIBE TO OUR NEWSLETTER</p>
            <h3 className="p2">Get weekly updates</h3>
          </div>
          <div className="form1">
            <form>
              <div className="con-gap">
                <label className="lab1" htmlFor="data">
                  Fill in your details to join the party!
                </label>
                <br />
                <input
                  className="info"
                  id="data"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <br />
                <input
                  className="info"
                  type="text"
                  placeholder="Email address"
                  required
                />
                <br />
                <button className="sub-but">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div >
          <img src={symbols} alt="logo" />
          <p className="footer-para">
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </p>
          <img src={social} alt="Social Icons" />
        </div>
        <img src={separator} alt="separator" />
        <div className="sec1">
          <div className="det">
            <h4>Company</h4>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>News</p>
            </a>
            <a href="#">
              <p>Careers</p>
            </a>
            <a href="#">
              <p>How we work</p>
            </a>
          </div>
          <div className="det">
            <h4>Support</h4>
            <a href="#">
              <p>Account</p>
            </a>

            <a href="#">
              <p>Support Center</p>
            </a>

            <a href="#">
              <p>FAQ</p>
            </a>
            <a href="#">
              <p>Accessibility</p>
            </a>
          </div>
          <div className="det">
            <h4>More</h4>
            <a href="#">
              <p>Covid Advisory</p>
            </a>
            <a href="#">
              <p>Airline Fees</p>
            </a>
            <a href="#">
              <p>Tips</p>
            </a>
            <a href="#">
              <p>Quarantine Rules</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
