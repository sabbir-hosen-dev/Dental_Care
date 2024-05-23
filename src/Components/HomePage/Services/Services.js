import React from "react";
import "./Service.css";

const serviceData = [
  {
    id: 804,
    img: "https://raw.githubusercontent.com/sabbir-hosen-dev/Dental_Care/main/src/assets/images/cavity.png",
    title: "Fluoride Treatment",
    describetion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 874,
    img:"https://raw.githubusercontent.com/sabbir-hosen-dev/Dental_Care/main/src/assets/images/fluoride.png",
    title: "Cavity Filling",
    describetion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 8834,
    img: "https://raw.githubusercontent.com/sabbir-hosen-dev/Dental_Care/main/src/assets/images/whitening.png",
    title: "Teeth Whitening",
    describetion:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];

function Services() {
  return (
    <section className="wrap">
      <section className="margin wrap">
        <div className="service-top">
          <h5 className="h5">Our Service</h5>
          <h3>Services We Provide</h3>
        </div>
        <div className="row">
          {serviceData.map((data) => {
            const { id, title, img, describetion } = data;

            return (
              <div className="service" key={id}>
                <div className="img-wrap">
                  <img src={img} alt="" />
                </div>
                <div className="s-bottom">
                  <h4>{title}</h4>
                  <p>{describetion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Services;
