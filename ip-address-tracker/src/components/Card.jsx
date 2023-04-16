import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center absolute top-36 w-full px-5'>
        <div className='bg-white rounded-xl w-full flex flex-col md:flex-row items-center justify-center p-2 md:w-2/3 md:h-28 md:items-left md:justify-start md:mt-8'>
            <div className='font-rubikRegular p-3 text-center md:text-left md:pr-12'>
                <p className='text-secondary uppercase text-xs '>ip address</p>
                <h1 className=' text-primary font-semibold pt-1'>192.212.174.101</h1>
            </div>

            <div className='font-rubikRegular p-1 text-center md:text-left md:border-l md:border-primary-200 md:pr-12 md:pl-8'>
                <p className='text-secondary uppercase text-xs '>location</p>
                <h1 className=' text-primary font-semibold pt-1 md:w-2/3 md:break-words '>Brooklyn, NY 10001</h1>
            </div>

            <div className='font-rubikRegular p-1 text-center md:text-left md:border-l md:border-primary-200 md:pr-12 md:pl-8'>
                <p className='text-secondary uppercase text-xs'>timezone</p>
                <h1 className=' text-primary font-semibold pt-1'>UTC-05:00</h1>
            </div>

            <div className='font-rubikRegular p-1 text-center md:text-left md:border-l md:border-primary-200 md:pl-8'>
                <p className='text-secondary uppercase text-xs '>isp</p>
                <h1 className=' text-primary font-semibold pt-1 md:w-2/3 md:break-words'>SpaceX Starlink</h1>
            </div>
        </div>
    </div>
  )
}

export default Card