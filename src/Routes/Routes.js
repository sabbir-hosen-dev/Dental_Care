import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Dashbord from './../page/Dashbord';
import Appoments from './../Components/Dashbord/Appoments/Appoments';
import AllUser from "../Components/Dashbord/AllUser/AllUser";
import AddDoctor from "../Components/Dashbord/AddDoctor/AddDoctor";
import ManageUser from "../Components/Dashbord/ManageUser/ManageUser";
import ManageDoctors from "../Components/Dashbord/ManageDoctors/ManageDoctors";
import ProtectedRoute from './ProtectedRoute';
import Appoinment from './../page/Appoinment';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashbord"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashbord"
            element={<Navigate to="appoments" replace />}
          />
          <Route path="appoments" element={<Appoments />} />
          <Route path="alluser" element={<AllUser />} />
          <Route path="adddoctor" element={<AddDoctor />} />
          <Route path="manageuser" element={<ManageUser />} />
          <Route path="managedoctors" element={<ManageDoctors />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
