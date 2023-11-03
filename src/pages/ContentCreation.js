import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'

function ContentCreation(props) {
  return (
    <div>
         <PageBanner title = {props.heading}></PageBanner>
    </div>
  )
}

export default ContentCreation