import React, { useEffect, useState } from "react";
import "./AllUser.css";

function AllUser() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://dental-care-server-xirg.onrender.com/getAllUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [users, setUsers]);
  let count = 0;

  return (
    <>
      <div className="admin-header">
        <h5>All Users: {count}</h5>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((data) => {
              count++;
              const { name, email, _id } = data;
              return (
                <tr key={_id}>
                  <td>{count}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default AllUser;
