import React from 'react'
import Navber from '../Components/Sheard/Navber/Navber'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <>
      <div className="wrap">
        <Navber />
      </div>
      <div style={{marginTop:"10px"}} className="dasbord">
      <div className="dashBordWrap">
      <div className="sidebr">
        <NavLink  className="sidebrLink" to="/admin/alluser">
          All User
        </NavLink>
        <NavLink className="sidebrLink" to="/admin/manageuser">Manage User</NavLink>
        <NavLink className="sidebrLink" to="/admin/adddoctor">Add a Doctor</NavLink>
        <NavLink className="sidebrLink" to="/admin/managedoctors">Manage Doctors</NavLink>
        <Link className="sidebrLink" to="/">Home</Link>
      </div>
      <div className="bord">
      <Outlet />
      </div>
    </div>
      </div>
    </>
  )
}

export default Admin
