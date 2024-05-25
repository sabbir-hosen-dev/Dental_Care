import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Appoment.css"

function Appoments() {
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(true);
  const [appoment,setAppoment] = useState(null);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCalendar(true);
  };

  useEffect(( ) => {
    fetch(`http://localhost:5003/getAppoment?date=${date}`)
    .then(res => res.json())
    .then(data => {
      setAppoment(data)
    })
    .catch(err => console.log(err))
  },[date,appoment,setDate])

  return (
    <div>
      <div className="calendarBtn-wrap">
        <button
          className="btn calendarBtn"
          onClick={() => setCalendar(!calendar)}
        >
          {date ? date.toLocaleDateString("en-US", options) : "Select a date"}
        </button>
        <div
          className="calendar-wrap"
          style={{ display: calendar ? "none" : "block" }}
        >
          <Calendar onChange={handleDateChange} value={date} />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            appoment && appoment.map((data,index)=> {
              const {_id} = data;
              return(
                <tr key={_id}>
                  <td>{index}</td>
                  <td>hi</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Appoments;
