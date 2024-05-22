import React from "react";

function Contact() {
  return (
    <section className=" c-container">
      <div className="contact">
        <div className="c-top">
        <h5 className="h5">Contact Us</h5>
        <h3>Stay connected with us</h3>
        </div>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject "
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <div className="btn-wrap">
          <button className="btn bg-primary  inline-block">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
