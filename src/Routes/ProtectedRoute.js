import React  from "react";
import { Navigate, useLocation } from "react-router-dom";
import useDoctorContex from "../Hook/useDoctorContext";

function ProtectedRoute({ children }) {
  const { user } = useDoctorContex()
  const location = useLocation();

  if (!user.login) {
    return <Navigate to="/login" replace state={{ form: location.pathname }} />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
