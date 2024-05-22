import React from "react";
import Navber from "../Components/Navber/Navber";
import Header from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import Services from "../Components/Services/Services";
import Treatment from "../Components/Treatment/Treatment";
import Appointment from "../Components/Appointment/Appointment";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="home-wrap">
        <div className="wrap">
          <Navber />
          <Header />
          <Info />
        </div>
      </div>
      <div className="wrap">
        <Services />
        <Treatment />
      </div>
      <div className="appointment-wrap">
        <div className="wrap">
          <Appointment />
        </div>
      </div>
      <div className="wrap">
       <Testimonial />
      </div>
      <div className="contact-wrap">
        <div className="wrap">
        <Contact />
        </div>
      </div>
      <div className="footer-wrap">
        <div className="wrap">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
