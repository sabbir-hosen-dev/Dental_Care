import React, { useRef, useState } from "react";
import "./AddDoctor.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    speciality: "Teeth-Orthodontics",
  });

  const [fileData, setFileData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileData(selectedFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFileDataSend = new FormData();
    formFileDataSend.append("myFile", fileData);
    formFileDataSend.append("name", formData.name);
    formFileDataSend.append("email", formData.email);
    formFileDataSend.append("speciality", formData.speciality);
    fetch("https://dental-care-server-xirg.onrender.com/addadoctor", {
      method: "POST",
      body: formFileDataSend,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setFormData({
            name: "",
            email: "",
            speciality: "Teeth-Orthodontics",
          });
          fileInputRef.current.value = "";
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
          value={formData.name}
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
          value={formData.email}
        />
      </div>
      <div className="input">
        <label htmlFor="specialty">Speciality</label>
        <select
          required
          onChange={handleChange}
          name="specialty"
          id="specialty"
          value={formData.speciality}
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
          ref={fileInputRef}
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
