import React from 'react'
import { IoArrowForward } from "react-icons/io5";
function About() {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12' id='About'>
      <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
      <div className="md:flex flex-wrap flex-col md:flex-row"></div>

      <ul>
        <div className="flex gap-3 py-4">
          <IoArrowForward size={30} className="mt-1"/>
          <span className='w-96'>
            <h1 className=' text-xl md:text-2xl font-semibold '>
            Frontend developer
            </h1>
            <p className='text-sm md:text-md leading-tight'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolores, modi architecto consequatur aliquid qui ipsum eligendi fuga eveniet quod commodi quaerat aut ratione, corrupti saepe doloremque, porro tenetur placeat pariatur minus eaque ullam. Rerum totam perspiciatis nihil voluptatum! Dolor?

            </p>
          </span>
        </div>
      </ul>
    </div>
    
  )
}

export default About
