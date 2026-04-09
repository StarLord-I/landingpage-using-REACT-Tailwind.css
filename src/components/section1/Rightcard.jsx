import React from 'react'
import { ArrowRight } from "lucide-react";
function Rightcard() {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-3xl'>
     
      <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661418115591-f86017c31e6f?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />

      <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
        <h2 className=' bg-white    rounded-full h-12 w-12 flex justify-center items-center font-semibold text-xl'>1</h2>
        <div>
            <p className=' leading-normal text-xl font-medium  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iusto non inventore!</p>

            <div className='flex align-baseline'>
                <button className='bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold text-white '> Satisfied </button>
                <button className='bg-blue-600 py-2 px-3 rounded-full text-lg font-semibold text-white '>
                     <ArrowRight size={30} />
                </button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Rightcard