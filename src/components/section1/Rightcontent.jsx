import React from 'react'
import Rightcard from './Rightcard'
function Rightcontent(props) {
  return (
    <div className='h-full overflow-x-auto flex flex-nowrap gap-7 w-2/3  p-7'>
       
       {props.user.map(function(elem){

        return <Rightcard img={elem.img} tag={elem.tag} />
       })}
       

     </div>
  )
}

export default Rightcontent