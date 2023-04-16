import React from 'react'
import arrow from '../assets/images/icon-arrow.svg';
import Card from './Card';

const 
Home = () => {
  return (
    <div className='bg-red-100 h-screen relative w-full'>
          <div className=" bg-mobile md:bg-desktop  flex flex-col items-center p-5 h-60 bg-fill bg-no-repeat w-full ">
            <h1 className='font-rubikRegular text-white text-2xl md:text-3xl mt-3 mb-5'>IP Address Tracker</h1>
            <div className='flex h-12 w-full md:w-1/2 '>
              <input 
                type="text"
                className='border border-black rounded-l-xl h-full w-full font-rubikRegular p-3 border-none outline-none text-sm md:text-base cursor-pointer mb-3 text-primary '
                placeholder='Search for any IP address or domain' 
             />
              <div className='bg-black rounded-r-xl flex items-center justify-center p-3 h-full w-1/6 md:w-20 cursor-pointer'>
                <img src={arrow} alt="search" />
              </div>
            </div>
          </div>

          <Card />
    </div>

  )
}

export default 
Home