import React from "react";
import Navber from "../Components/Sheard/Navber/Navber";
import DashbordBody from "../Components/Dashbord/DashbordBody/DashbordBody";

function Dashbord() {
  return (
    <>
      <div className="wrap">
        <Navber />
      </div>
      <div className="dasbord">
        <DashbordBody />
      </div>
    </>
  );
}

export default Dashbord;
