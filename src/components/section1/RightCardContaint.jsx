import React from 'react'
import { ArrowRight } from "lucide-react";
function RightCardContaint(props) {
  return (


    <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
        <h2 className=' bg-white    rounded-full h-12 w-12 flex justify-center items-center font-semibold text-xl'>1</h2>
        <div>
            <p className=' leading-normal text-xl font-medium  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto non inventore!</p>

            <div className='flex align-baseline justify-between mt-4'>
                <button className='bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold text-white '> {props.tag}</button>
                <button className='bg-blue-600 py-2 px-3 rounded-full text-lg font-semibold text-white '>
                     < ArrowRight size={30} />
                </button>
            </div>
        </div>

            

    </div>      
  )
}

export default RightCardContaint