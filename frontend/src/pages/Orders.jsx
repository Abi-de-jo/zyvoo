import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Order = () => {
  const { products,currency} = useContext(ShopContext)
  return (
    <div className='border-t pt-16 mt-8'>
      <div className='text-2xl'>

        <Title text1={"MY"}  text2={"ORDERS"}/>

      </div>

      <div>
        {
          products.slice(3,8).map((item,index)=>(
            <div key={index} className='flex items-center justify-between border-b py-4'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded-md'/>
                <div>
                  <p className='text-lg font-semibold'>{item.name}</p>
                  <div className='flex items-center gap-2 mt-2 text-base text-gray-500'>
<p>{currency}{item.price}</p>
<p>Quantity: 1</p>
<p>Size: M</p>
                  </div>
                  <p className='mt-2'> Date:<span className='text-gray-400'>25, Jan 2025</span></p>
                 </div>



              </div>




              <div className='md:w-1/2 flex justify-between'>
<div className='flex items-center gap-2'>
<p className='text-lg font-semibold'></p>
<p className='text-lg text-gray-500'>Ready to Ship</p>

  </div>  
  <button className='border px-4 py-2 text-sm font-medium bg-gray-100 rounded-sm'>Track Order</button>
  
  
              </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
