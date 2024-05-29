import React, { useEffect, useState } from "react";
import "./Dashbord.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import useDoctorContex from "../../../Hook/useDoctorContext";
import { SiTruenas } from "react-icons/si";

function DashbordBody() {
  const [isDoctor, setIsDOctor] = useState(false);
  const { user } = useDoctorContex();

  useEffect(() => {
    fetch(
      `https://dental-care-server-xirg.onrender.com/userRoll?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setIsDOctor(SiTruenas);
        }
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="dashBordWrap">
      <div className="sidebr">
        <NavLink className="sidebrLink" to="/dashbord/appoments">
          My Appointment
        </NavLink>
        {/* <Link to="/dashbord/reveiws"><h5>MY Reveiws</h5></Link>
        <Link to="/dashbord/history"><h5>My History</h5></Link>
        <Link to="/"><h5>My History</h5></Link> */}

        {isDoctor && (
          <>
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
          </>
        )}

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
