import React from "react";
import "./Dashbord.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function DashbordBody() {
  return (
    <div className="dashBordWrap">
      <div className="sidebr">
        <NavLink className="sidebrLink" to="/dashbord/appoments">
          My Appointment
        </NavLink>
        {/* <Link to="/dashbord/reveiws"><h5>MY Reveiws</h5></Link>
        <Link to="/dashbord/history"><h5>My History</h5></Link>
        <Link to="/"><h5>My History</h5></Link> */}

        <NavLink className="sidebrLink" to="/dashbord/alluser">
          All User
        </NavLink>
        <NavLink className="sidebrLink" to="/dashbord/manageuser">
          Manage User
        </NavLink>
        <NavLink className="sidebrLink" to="/dashbord/adddoctor">
          Add a Doctor
        </NavLink>
        <NavLink className="sidebrLink" to="/dashbord/managedoctors">
          Manage Doctors
        </NavLink>
        <Link className="sidebrLink" to="/">
          Home
        </Link>
      </div>
      <div className="bord">
        <Outlet />
      </div>
    </div>
  );
}

export default DashbordBody;
