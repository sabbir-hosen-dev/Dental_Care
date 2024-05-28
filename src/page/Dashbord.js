import React from "react";
import Navber from "../Components/Sheard/Navber/Navber";
import DashbordBody from "../Components/Dashbord/DashbordBody/DashbordBody";



function Dashbord() {

  return (
    <>
      <div className="wrap">
        <Navber />
      </div>
      <div style={{marginTop:"10px"}} className="dasbord">
        <DashbordBody />
      </div>
    </>
  );
}

export default Dashbord;
