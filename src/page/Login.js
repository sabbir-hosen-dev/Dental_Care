import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../Firebase/Firbase";

function Login() {

  const handleClick = () => {
    signInWithPopup(auth,googleProvider)
    // .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  return (
    <div className="login">
      <div className="login-wrap">
        <h4>Login</h4>
        <form action="" className="login-form">
          <div className="input">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input">
            <label htmlFor="password" className="pass">
              Password
            </label>
            <input type="password" name="password" id="passwork" required />
            <small className="forget">Forget Password</small>
          </div>
          <button type="submit" className="btn bg-primary">
            Login
          </button>
        </form>
        <small>
          New to Dental_care?{" "}
          <Link to="/signup" className="primary link">
            Create New acount
          </Link>
        </small>

        <p>Or</p>

        <button onClick={handleClick} className="btn bg-none">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
}

export default Login;
