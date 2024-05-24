import React from 'react'
import "./appoService.css"

const appomentServiceData = [
  {
    title:"Teeth Orthodonics",
    time : "8:30 AM - 10:00 AM",
    id:34
  },
  {
    title:"Conmetic Dentistry",
    time : "10:00 AM - 12:00 AM",
    id:54
  },
  {
    title:"Teeth Cleaning",
    time : "01:00 PM - 02:00 PM",
    id:404
  },
  {
    title:"Cavity Protection",
    time : "03:00 PM - 04:00 PM",
    id:44
  },
  {
    title:"Pediatic Dental",
    time : "04:00 PM - 06:00 PM",
    id:445
  },
  {
    title:"Oral Sugery",
    time : "06:00 PM - 08:00 PM",
    id:448
  },
]

function AppomentServices({date,handleService}) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <section className='margin'>
      <div className="apoHeader">
        <h4>Available Services on {date && date.toLocaleDateString('en-US', options)}</h4>
        <p>Please Select a service</p>
      </div>
      <div className="grid-3">
      {appomentServiceData &&
        appomentServiceData.map(data => (
          <div className="app apoServiceCard" key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.time}</p>
            <button className="btn bg-primary"
             onClick={() => handleService(data)}
            >Book Appointment</button>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default AppomentServices



