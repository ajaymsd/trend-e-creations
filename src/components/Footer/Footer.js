import React from 'react'
import './Footer.css';
import logo from './assets/logowithoutbg.png';
function Footer() {
  return (
    <div className ="footer">
        <div className='d-flex justify-content-around footer-1'>
     <img className="logo" src={logo}></img>
     <div class="footer-sec-1">
        <h4>Digital Marketing</h4>
        <ul>
            <li>Digital Marketing</li>
            <li>Content Creation</li>
            <li>Advertising and Advertisements</li>
        </ul>
     </div>

     <div class="footer-sec-1">
        <h4>Photography</h4>
        <ul>
            <li>Event Photography</li>
            <li>Product Photography</li>
            <li>Modelling Photography</li>
        </ul>
     </div>
     <div class="footer-sec-3">
        <h4>Policy</h4>
        <ul>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
        </ul>
     </div>

     <div class="footer-sec-3">
        <h4>Contact</h4>
        <ul>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
        </ul>
     </div>
    </div>
    </div>
    
  )
}

export default Footer