import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Calender.css"

function Calender({onChange}) {

  return (
    <div>
      <Calendar className="clenderStyle" onChange={onChange} value={new Date()} />
    </div>
  );
}

export default Calender;
