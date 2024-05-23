import React from "react";
import Header from "../Components/HomePage/Header/Header";
import Info from "../Components/HomePage/Info/Info";
import Services from "../Components/HomePage/Services/Services";
import Treatment from "../Components/HomePage/Treatment/Treatment";
import Testimonial from "../Components/HomePage/Testimonial/Testimonial";
import Exparment from "../Components/HomePage/Exparment/Exparment";
import Footer from "../Components/Sheard/Footer/Footer";
import Navber from "../Components/Sheard/Navber/Navber";
import Contact from "../Components/HomePage/Contact/Contact";

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
      <Services />
      <Treatment />
      <Exparment />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
