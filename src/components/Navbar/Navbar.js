import React from 'react'
import './Navbar.css';
import logo from './assets/logo.jpg'
function Navbar() {
  return (
   <div className='mt-3'>
        <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
            <img className="nav-logo" src={logo} alt="logo" />
            <div className="nav-title"> TREND-E CREATIONS</div>
        </div>
        <div className="nav-btn">
            <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
  
  <div className="nav-links">
    <a href="#" target="_blank">Home</a>
    <a href="#" target="_blank">About</a>
    <a href="#" target="_blank">Services</a>
    <a href="#" target="_blank">Contact</a>
  </div>
 </div>
   </div>
  )
}

export default Navbar