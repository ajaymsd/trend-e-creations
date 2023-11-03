import React from 'react'
import banner from './assets/banner.png'
import './Header.css';

function Header() {
  return (
    <div className="d-flex mt-5 justify-content-center flex-wrap">
      <div className='banner-content'>
        <h1 className="">Boosting Businesses in <br></br> <span>the Digital Age ...</span></h1>
        <p>Join us on a visual journey where photography and digital marketing converge to <br></br>shape your brand's narrative. <br></br>Let's make every pixel count and every click matter.</p>
        <div class="d-flex mt-1">
            <button class="btn1">Schedule a meet Now</button>
            <button className='btn2 mx-3'>Contact</button>
        </div>
      </div>
      <div className='banner-img'>
        <img src={banner} alt=""></img>
      </div>

    </div>
  )
}

export default Header