import React from 'react'
import './About.css'
import about from './assets/aboutus.jpg'
// import Fa6Instagram from 'react-icons/fa6'
function About() {
  return (
    <div className='mt-5'>
        <section class="about-section">
  <div class="container">
    <div class="row">
      <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div class="inner-column">
          <div class="sec-title">
            <span class="title">About Us</span>
            <h2>We are Creative Tech Enthusiast working since 2020</h2>
          </div>
          <div class="text">TREND-E creations is a digital marketing company which was founded in October 2020 by the two engineering passed out youngsters with lot of aspirations and new innovative ideas.</div>
          <div class="text">
          TREND-E creations is a business to business client based company, we are providing all kind of services which is purely online and digital medium oriented.
          </div>
          <div class="btn-box">
            <a href="#" class="theme-btn btn-style-one">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="image-column col-lg-6 col-md-12 col-sm-12">
        <div class="inner-column wow fadeInLeft">
          <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img src = {about} alt=""></img></a></figure>
        </div>
      </div>
    </div>
    <div class="sec-title">
      <p className='text-secondary'>Our Future goal</p>
      <h2>We want to lead in innovation & Technology</h2>
    </div>
    <div class="text">
    TREND-E creations is a business to business client based company, we are providing all kind of services which is purely online and digital medium oriented.
    </div>
    <div class="text">
    TREND-E creations is a business to business client based company, we are providing all kind of services which is purely online and digital medium oriented
    </div>
    <div class="text">
    TREND-E creations is a business to business client based company, we are providing all kind of services which is purely online and digital medium oriented.
    </div>
    <div class="text">
      In the end, I would say keep visiting our website and acquire all of our services at your convenience.
    </div>
  </div>
</section>
    </div>
  )
}

export default About