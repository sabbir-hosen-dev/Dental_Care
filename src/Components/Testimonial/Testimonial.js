import { BsQuote } from "react-icons/bs"; 
import React from 'react'

const tmData = [
  {
    id:233,
    name:"Sabbir Hosen",
    description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image:require("../../assets/images/people1.png"),
    town:"Tangail"
  },
  {
    id:333,
    name:"Sani",
    description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image:require("../../assets/images/people2.png"),
    town:"Tangail"
  },
  {
    id:336,
    name:"Aslam",
    description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    image:require("../../assets/images/people3.png"),
    town:"Tangail"
  },
]

function Testimonial() {
  return (
    <section className='testimonial margin'>
      <div className="testimornial-top">
        <div className="t-left">
        <h5 className="h5">Testimonial</h5>
        <h2>What Our Patients Says</h2>
        </div>
        <div className="t-right">
          <BsQuote className="quote" />
        </div>
      </div>
      <div className="tm-col">
        {tmData.map(data => {
          const {id,name,image,description,town} = data;
          return(
            <div className="tm-row" key={id}>
              <p>{description}</p>

              <div className="tm-info-wrap">
                <div className="tm-logo">
                  <img src={image} alt="" />
                </div>
                <div className="tm-info">
                    <h4>{name}</h4>
                    <h6>{town}</h6>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial
