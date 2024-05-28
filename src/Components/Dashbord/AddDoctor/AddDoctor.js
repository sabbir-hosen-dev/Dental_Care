import React, { useState } from "react";
import "./AddDoctor.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    speciality:"Teeth-Orthodontics",
  });
  const data = new FormData();

  const handleFileChange = (e) => {
    const selectFile = e.target.files[0]
    
    console.log(selectFile)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form action="" className="addDoctor" onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="specialty">Speciality</label>
        <select
          required
          onChange={handleChange}
          name="specialty"
          id="specialty"
        >
          <option value="Teeth-Orthodontics">Teeth Orthodontics</option>
          <option value="Cavity-Protaction">Cavity-Protaction</option>
          <option value="Pediatric-Dental ">Pediatric-Dental </option>
          <option value="Teeth-Cleaning ">Teeth-Cleaning </option>
          <option value="Oral-Surgery ">Oral-Surgery </option>
        </select>
      </div>
      <div className="input">
        <input
          type="file"
          name="file"
          id="file inline-block"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddDoctor;
