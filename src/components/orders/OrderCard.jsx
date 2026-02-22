import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
  return (
    <div className="w-[350px] bg-[#262626] p-4 rounded-lg mb-4">
        <div className='flex items-center gap-5 mb-'>
                    <button className="bg-orange-400 p-3 text-xl font-bold rounded-lg">AM</button>
        <div className='flex items-center justify-between w-[100%]'>
            <div className='flex flex-col items-start gap-1'>
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Adnan Ashrafali</h1>
                <p className="text-[#ababab] text-sm">#101/Dine in</p>
            </div>
            <div className='flex flex-col items-end gap-2'>
                <p className='text-green-600 bg-gray-500 px-2 py-1 rounded-lg'><FaCheckDouble className="inline mr-2" />Ready</p>
                <p className='text-[#ababab] text-sm'><FaCircle className='inline mr-1 mb-0.5 text-green-600'/>Ready to Serve</p>
            </div>
        </div>
        </div>
        <div className='flex-grow items-center mt-4 text-[#ababab]'>
        <p>April 30, 2025 08:32 PM</p>
        <p>8 Items</p>
        <hr className='w-full mt-4 border-t-1 border-gray-500' />
        <div className='flex items-center justify-between mt-4'>
            <h1 className='text-[#f5f5f5] text-lg font-semibold'>Total</h1>
            <p className="text-[#f5f5f5] text-lg font-semibold">₹250</p>
        </div>
        </div>
    </div>
  )
}

export default OrderCard