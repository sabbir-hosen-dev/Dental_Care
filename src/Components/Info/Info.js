import { CiLocationOn } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import React from "react";

const infodata = [
  {
    id: "9002",
    title: "Opening Hours",
    descprion: "Lorem Ipsum is simply dummy text ",
    icon: <AiOutlineClockCircle className="icon" />,
  },
  {
    id: "09884",
    title: "Visit out location",
    descprion: "Brooklyn, NY 10036, United States",
    icon: <CiLocationOn className="icon" />,
  },
  {
    id: "4578",
    title: "Contact us now",
    descprion: "+000 123 456789",
    icon: <BiPhone className="icon" />,
  },
];

function Info() {
  return (
    <section className="info-wrap">
      <div className="row">
        {infodata.map((info) => {
          const { id, icon, title, descprion } = info;
          return (
            <div className="info" key={id}>
              <div className="info-icon">{icon}</div>
              <div className="info-desc">
                <h5>{title}</h5>
                <p>{descprion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Info;
