import React, { useState } from "react";
import Navber from "../Components/Sheard/Navber/Navber";
import Footer from "../Components/Sheard/Footer/Footer";
import AppomentHeader from "./../Components/Appoment/AppomentHeader/HeaderApomment";
import AppomentServices from "../Components/Appoment/AppomentServices/ServicesAppoment";
import Morderl from "../Components/Appoment/Mordel/Morderl";

function Appoinment() {
  const [date, setDate] = useState(new Date());
  const [mordal, setMordal] = useState(false);

  const [service, setService] = useState({
    title: "",
    time: "",
    date: "",
  });
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formetDate = date.toLocaleDateString("en-US", options);

  const handleService = (data) => {
    setService({
      ...service,
      title: data.title,
      time:data.time,
      date: formetDate 
    });
    setMordal(true)

  };


  return (
    <>
      <div className="home-wrap">
        <div className="wrap">
          <Navber />
          <AppomentHeader setDate={setDate} />
        </div>
      </div>
      <div className="wrap">
        <Morderl mordal={{ mordal, setMordal, service }} />
        <AppomentServices handleService={handleService} date={date} />
        <Footer />
      </div>
    </>
  );
}

export default Appoinment;
