import React from 'react'
import { ArrowUpRight } from "lucide-react";
function Leftcontent() {
  return (
    <div className='h-full w-1/4 bg-yellow-800 '>
       
       <div>
          <h3 className='text-5xl font-bold '>Prospective <br /> <span>Customer</span> <br />
            segmentation
          </h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rerum. Adipisci perferendis possimus, a libero dolore nesciunt modi vitae ipsa architecto expedita qui deserunt corrupti soluta laborum praesentium unde.</p>
       </div>
       <div className=''>
         <ArrowUpRight size={64} />
       </div>

    </div>
  )
}

export default Leftcontent