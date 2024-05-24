import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Calender.css"

function Calender({setDate}) {
  const [value,setValue] = useState(new Date())

  useEffect(() => {
    setDate(value)
  },[setDate, value])

  return (
    <div>
      <Calendar className="clenderStyle" onChange={setValue} value={value} />
    </div>
  );
}

export default Calender;
