import React from "react";
import "./Dashbord.css";
import { Link, Outlet} from "react-router-dom";

function DashbordBody() {
  return (
    <div className="dashBordWrap">
      <div className="sidebr">
        <Link to="/dashbord/appoments">
          <h4>My Appointment</h4>
        </Link>
      </div>
      <div className="bord">
      <Outlet />
      </div>
    </div>
  );
}

export default DashbordBody;
