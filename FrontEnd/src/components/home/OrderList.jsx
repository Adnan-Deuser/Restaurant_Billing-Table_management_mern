import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
  return (
    <div className="flex items-center gap-5 mb-3 
                    bg-[#1a1a1a]/70 backdrop-blur-sm border border-[#2a2a2a] 
                    p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
        
        <button className="bg-emerald-400 p-3 text-xl font-bold rounded-lg shadow-md hover:scale-105 transition-transform">
          AM
        </button>

        <div className='flex items-center justify-between w-[100%]'>
            
            <div className='flex flex-col items-start gap-1'>
                <h1 className="text-cyan-400 text-lg font-semibold tracking-wide drop-shadow-md">
                  Adnan Ashrafali
                </h1>
                <p className="text-[#ababab] text-sm">8 Items</p>
            </div>

            <div>
                <h1 className='text-yellow-400 font-semibold border border-yellow-400 rounded-lg p-1 shadow-md'>
                  Table No:3
                </h1>
            </div>

            <div className='flex flex-col items-end gap-2'>
                <p className='text-green-400 font-semibold drop-shadow-md'>
                  <FaCheckDouble className="inline mr-2" />Ready
                </p>
                <p className='text-[#ababab] text-sm'>
                  <FaCircle className='inline mr-1 mb-0.5 text-green-400'/>Ready to Serve
                </p>
            </div>

        </div>
    </div>
  )
}

export default OrderList