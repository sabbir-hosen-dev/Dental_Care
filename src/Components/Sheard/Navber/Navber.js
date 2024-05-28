import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css";
import useDoctorContex from "../../../Hook/useDoctorContext";

function Navber() {
  const [active, setActive] = useState(true);
  const { user } = useDoctorContex();
  const { name, image, login } = user;
  return (
    <nav className="nav-wrap">
      <h2 className="d">Dental_Care</h2>
      <ul className={active ? "" : "navActive"} onClick={() => setActive(true)}>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/appoinment" className="link">
          Appointment
        </NavLink>
        <NavLink to="/dashbord" className="link">
         DashBord
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact Us
        </NavLink>
        {login ? (
          <img
            src={image && image}
            alt="logo"
            title={name}
            className="profile-logo"
          />
        ) : (
          <NavLink to="/login" className="link">
            Login
          </NavLink>
        )}
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
