import React from 'react'
import './PageBanner.css'
import background from '../About/assets/aboutus.jpg'
function PageBanner(props) {
  const bgStyle={
    backgroundImage: `url(${background})` ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div>
        <div className='banner-sec mt-2 d-flex justify-content-center align-items-center'>
            <div class="banner-title">
             <h1>{props.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageBanner