import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, googleProvider, mongoDbaddUser } from "../Firebase/Firbase";
import useDoctorContex from "./../Hook/useDoctorContext";

function Login() {
  const { user, setUser } = useDoctorContex();

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        const userData = {
          name: data.user.displayName,
          email: data.user.email,
          image: data.user.photoURL,
          login: true,
        };
        setUser({
          ...user,
          ...userData,
        });
        mongoDbaddUser(userData);
        navigate(location.state.form);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const userData = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          login: true,
        };
        setUser({
          ...user,
          ...userData,
        });
        mongoDbaddUser(userData);
        navigate(location.state.form);
      }
    });
    return () => unsubscribe();
  }, [location.state.form, navigate, setUser]);

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
            <input
              type="password"
              name="password"
              id="password"
              required
            />
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

        <button onClick={handleClick} className="btn bg-none">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default Login;
