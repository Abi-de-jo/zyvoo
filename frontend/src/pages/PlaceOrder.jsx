import React ,{useContext, useState}from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {

  const {navigate} = useContext(ShopContext)
  const [method, setMethod] = useState('cod');
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] px-4 sm:px-10 lg:px-20">
      
      {/* LEFT SIDE - DELIVERY INFORMATION */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[500px]">
        {/* Title */}
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="First Name" />
            <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Last Name" />
          </div>

          {/* Email */}
          <input type="email" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Email Address" />

          {/* Address */}
          <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Street Address" />

          {/* City & State */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="City" />
            <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="State" />
          </div>

          {/* Zip Code & Country */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="number" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Zip Code" />
            <input type="text" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Country" />
          </div>

          {/* Phone */}
          <input type="number" className="border-gray-300 border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-400" placeholder="Phone" />
        </div>
      </div>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <div className="mt-8 ">
         
         <div className="mt-8 min-w-80">

          <CartTotal/>
         </div>

         <div className='mt-12'>

<Title text1={"PAYMENT"} text2={"METHOD"} /> 

{/* payment */}
<div className='flex gap-4 flex-col lg:flex-row'>

<div onClick={()=>setMethod("stripe")} className='flex gap-2 items-center px-4 p-2   cursor-pointer'>
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe"? "bg-green-500": ""}`}></p>
<img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
</div>


<div onClick={()=>setMethod("razor")} className='flex gap-2 items-center px-4 p-2   cursor-pointer'>
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razor"? "bg-green-500": ""}`}></p>
<img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
</div>
<div  onClick={()=>setMethod("cod")}className='flex gap-2 items-center px-4 p-2   cursor-pointer'>
<p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod"? "bg-green-500": ""}`}></p>
 <p className='text-gray-500 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
 </div>
</div>


<div className='w-full text-end mt-8'>

<button  onClick = {()=>navigate(`/orders`)}className='bg-black text-white px-4 py-2 rounded-md'>PLACE ORDER</button>

</div>

         </div>
    </div>
    </div>
  );
};

export default PlaceOrder;
