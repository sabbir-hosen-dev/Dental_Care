import React, { useEffect, useState } from "react";
import "./Magageuser.css";

function ManageUser() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://dental-care-server-xirg.onrender.com/getAllUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [users, setUsers]);

  const handleDelete = (id) => {
    fetch(`https://dental-care-server-xirg.onrender.com/deleteUser?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  let count = 0;
  return (
    <>
      <div className="admin-header">
        <h5>All Users: {users && users.length}</h5>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
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
                  <td>
                    <button
                      className="btn bg-primary"
                      onClick={() => handleDelete(_id)}
                    >
                      delete
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

export default ManageUser;
