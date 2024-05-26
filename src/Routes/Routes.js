import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error";
import Appoinment from "../page/Appoinment";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Dashbord from "../page/Dashbord";
import Appoments from "../Components/Dashbord/Appoments/Appoments";
import AllUser from "../Components/Admin/AllUser/AllUser";
import AddDoctor from "../Components/Admin/AddDoctor/AddDoctor";
import Admin from "../page/Admin";
import ProtectedRoute from "./ProtectedRoute";
import ManageDoctors from "../Components/Admin/ManageDoctors/ManageDoctors";
import ManageUser from './../Components/Admin/ManageUser/ManageUser';

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
          <Route path="appoments" element={<Appoments />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
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
