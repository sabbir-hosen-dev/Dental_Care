import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="wrap">
        <div className="">
          <div className="f-top">
            <ul>
              <h4>SERVICES</h4>
              <li>Emergency Checup</li>
              <li>MOntly Checkub</li>
              <li>Weekly Checkup</li>
              <li>Deep Checkup</li>
            </ul>
            <ul>
              <h4>ORAL HEALTH</h4>
              <li>Fluoride Treatment</li>
              <li>Cavity Filling</li>
              <li>Teath Whitening</li>
              <li>Deep Checkup</li>
            </ul>
            <ul>
              <h4>OUR ADDERESS</h4>
              <li>New york -100010 hudson</li>
            </ul>
          </div>
          <div className="f-bottom">
            <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
