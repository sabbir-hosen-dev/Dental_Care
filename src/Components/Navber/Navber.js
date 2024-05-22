import React from 'react'
import {  NavLink } from 'react-router-dom'

function Navber() {
  return (
    <nav className='nav-wrap'>
      <h2 className="d">Dental_Care</h2>
      <ul>
        <NavLink to="/" className='link'>Home</NavLink>
        <NavLink to="/about" className='link'>About</NavLink>
        <NavLink to="/reviews" className='link'>Reviews</NavLink>
        <NavLink to="/contact" className='link'>Contact Us</NavLink>
        <NavLink to="/login" className='link'>Login</NavLink> 
      </ul>
    </nav>
  )
}

export default Navber
