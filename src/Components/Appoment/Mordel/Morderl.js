import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Morderl(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { mordal, setMordal,service} = props.mordal;

  function closeModal() {
    setMordal(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  return (
    <div className="modal">
      <Modal
        isOpen={mordal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="mordal-top">
          <h5> {service.title}</h5>
          <button onClick={closeModal}>
            <AiOutlineClose className="close-modal" />
          </button>
        </div>
        <p className="modal-p">{service.date && service.date.toLocaleDateString('en-US', options)}</p>
        <p className="modal-p">{service.time}</p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button className="btn " type="submit">
            the modal
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Morderl;
