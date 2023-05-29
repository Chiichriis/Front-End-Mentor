import React from 'react'

const Card = ({ info }) => {


  return (
    <div className='flex flex-col items-center justify-center absolute top-36 w-full px-5'>
        <div className='bg-white rounded-xl w-full flex flex-col md:flex-row items-center justify-center p-2 md:w-2/3 md:h-28 md:items-left md:justify-start md:mt-8'>
            <div className='font-rubikRegular p-3 text-center flex flex-col justify-center h-full w-full md:w-1/4  md:text-left'>
                <p className='text-secondary uppercase text-xs '>ip address</p>
                <h1 className=' text-primary font-semibold pt-1'>{info?.ip}</h1>
            </div>

            <div className='font-rubikRegular p-1 py-3 text-center md:text-left  flex justify-center flex-col h-full w-full md:w-1/4 md:pl-5 md:border-l border-secondary'>
                <p className='text-secondary uppercase text-xs '>location</p>
                <h1 className=' text-primary font-semibold pt-1 '>{info?.location?.country}, {info?.location?.region}</h1>
            </div>

            <div className='font-rubikRegular p-1 py-3 text-center md:text-left flex flex-col justify-center h-full w-full md:w-1/4 md:pl-5 md:border-l border-secondary'>
                <p className='text-secondary uppercase text-xs'>timezone</p>
                <h1 className=' text-primary font-semibold pt-1'>{info?.location?.timezone}</h1>
            </div>

            <div className='font-rubikRegular p-1 py-3 text-center md:text-left flex flex-col justify-center h-full w-full md:w-1/4 md:pl-5 md:border-l border-secondary'>
                <p className='text-secondary uppercase text-xs '>isp</p>
                <h1 className=' text-primary font-semibold pt-1'>{info?.isp}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card