import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent';
function Page1Contant(props) {
  return (
    <div className='py-10 flex items-center gap-10  h-[85vh] px-16'>
      <Leftcontent />
      <Rightcontent user={props.user} />
    </div>
  )
}

export default Page1Contant