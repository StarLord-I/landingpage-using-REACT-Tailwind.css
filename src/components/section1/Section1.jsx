import React from 'react'
import Navbar from './Navbar';
import Page1Contant from './Page1Contant';
function Section1(props) {
  return (
    <div className='h-screen w-full '>
      <Navbar />
      <Page1Contant user={props.user}/>

    </div>
  )
}

export default Section1