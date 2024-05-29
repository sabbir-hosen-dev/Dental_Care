import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Appoment.css";

function Appoments() {
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(true);
  const [appoment, setAppoment] = useState(null);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setCalendar(true);
  };

  useEffect(() => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formetDate = date.toLocaleDateString("en-US", options);

    fetch(
      `https://dental-care-server-xirg.onrender.com/getAppoment?date=${formetDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAppoment(data);
      })
      .catch((err) => console.log(err));
  }, [date]);
  let count = 0;
  return (
    <div>
      <div className="calendarBtn-wrap">
        <h4>Appointment</h4>
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
          {appoment &&
            appoment.map((data, index) => {
              const { _id, time, title, name } = data;
              count++;
              return (
                <tr key={_id}>
                  <td>{count}</td>
                  <td>{name}</td>
                  <td>{title}</td>
                  <td>{time}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Appoments;
