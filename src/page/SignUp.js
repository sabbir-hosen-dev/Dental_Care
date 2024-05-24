import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="login">
      <div className="login-wrap">
        <h4>Sign Up</h4>
        <form action="" className="login-form">
          <div className="input">
            <label htmlFor="name">name</label>
            <input type="name" name="name" id="name" required />
          </div>
          <div className="input">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input">
            <label htmlFor="password" className="pass">
              Password
            </label>
            <input type="password" name="password" id="passwork" required />
          </div>
          <button type="submit" className="btn bg-primary">
            Sign Up
          </button>
        </form>
        <small>
          Old to Dental_care?{" "}
          <Link to="/signup" className="primary">
            Create New acount
          </Link>
        </small>

        <p>Or</p>

        <button className="btn bg-none">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
}

export default SignUp;
