import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Error from '../page/Error'
import Appoinment from '../page/Appoinment'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Dashbord from '../page/Dashbord'
import Appoments from '../Components/Dashbord/Appoments/Appoments'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashbord" element={<Dashbord />} >
            <Route path='appoments' element={<Appoments />} />
         </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
