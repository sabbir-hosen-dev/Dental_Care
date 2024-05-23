import React, { useState } from "react";
import Navber from "../Components/Sheard/Navber/Navber";
import Footer from '../Components/Sheard/Footer/Footer';
import AppomentHeader from "../Components/Appoment/AppomentHeader/AppomentHeader";

function Appoinment() {

  const [date,getDate] = useState();

  console.log(date)

  return (
    <div className="home-wrap">
      <div className="wrap">
        <Navber />
        <AppomentHeader date={getDate} />
      </div>
      <Footer />
    </div>
  );
}

export default Appoinment;
