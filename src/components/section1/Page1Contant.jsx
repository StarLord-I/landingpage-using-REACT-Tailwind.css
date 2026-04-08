import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent';
function Page1Contant() {
  return (
    <div className='py-10 flex items-center gap-10  h-[85vh] bg-amber-950 px-16'>
      <Leftcontent />
      <Rightcontent />
    </div>
  )
}

export default Page1Contant