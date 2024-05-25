import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css";

function Navber() {
  const [active, setActive] = useState(true);
  return (
    <nav className="nav-wrap">
      <h2 className="d">Dental_Care</h2>
      <ul className={active ? "navNotActive" : "navActive"}>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/appoinment" className="link">
          Appointment
        </NavLink>
        <NavLink to="/reviews" className="link">
          Reviews
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact Us
        </NavLink>
        <NavLink to="/login" className="link">
          Login
        </NavLink>
      </ul>
      {active && (
        <AiOutlineMenu
          className={`menu ${active ? "" : " navActive"}`}
          onClick={() => setActive(false)}
        />
      )}
      {!active && (
        <AiOutlineClose className="navClose" onClick={() => setActive(true)} />
      )}
    </nav>
  );
}

export default Navber;
