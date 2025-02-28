import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col  sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm d:text-base
     text-gray-700'>
        
        <div className=''>
<img src={assets.exchange_icon} className='m-auto mb-5 w-12' alt="" />
       <p className='font-semibold'>Easy Exchange Policy</p>
       <p className='text-gray-500'> We Offer Hassle Free Excahnge Policy</p>
</div>
        <div className=''>
<img src={assets.quality_icon} className='m-auto mb-5 w-12' alt="" />
       <p className='font-semibold'>7 Days Return Policy</p>
       <p className='text-gray-500'> We Offer Hassle Free Excahnge Policy</p>
</div>
        <div className=''>
<img src={assets.support_img} className='m-auto mb-5 w-12' alt="" />
       <p className='font-semibold'>Best Customer Support </p>
       <p className='text-gray-500'> We Offer Hassle Free Excahnge Policy</p>
</div>
        
        
        </div>
  )
}

export default OurPolicy