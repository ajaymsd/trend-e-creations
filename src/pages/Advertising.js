import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'

function Advertising(props) {
  return (
    <div>
        <PageBanner title = {props.heading}></PageBanner>
    </div>
  )
}

export default Advertising