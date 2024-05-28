import React, { useEffect, useState } from "react";
import "./ManageDoctors.css";

function ManageDoctors() {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5003/getAllDoctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, [doctors, setDoctors]);
  let count = 0;

  const handleDelete = (email) => {
    fetch(`http://localhost:5003/deleteDoctor?email=${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="admin-header">
        <h5>All Doctors: {count}</h5>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Speciality</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors &&
            doctors.map((data) => {
              count++;
              const { name, _id,email, img, speciality } = data;
              return (
                <tr key={_id}>
                  <td>{count}</td>
                  <td>
                    <img
                      className="doctorsImg"
                      src={`http://localhost:5003/${img}`}
                      alt=""
                    />
                  </td>
                  <td>{name}</td>
                  <td>{speciality}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(email)}
                      className="btn delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ManageDoctors;
