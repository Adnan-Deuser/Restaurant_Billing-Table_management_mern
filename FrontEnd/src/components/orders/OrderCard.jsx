import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
  return (
    <div className="w-[360px] bg-gradient-to-br from-[#262626] to-[#1f1f1f] 
                    p-5 rounded-2xl border border-[#2e2e2e] 
                    shadow-lg hover:shadow-2xl 
                    hover:scale-[1.02] transition-all duration-300">

      <div className='flex items-start gap-4'>

        <div className="bg-gradient-to-br from-orange-400 to-orange-600 
                        h-12 w-12 flex items-center justify-center 
                        text-lg font-bold rounded-xl shadow-md">
          AM
        </div>

        <div className='flex justify-between w-full'>

          <div className='flex flex-col gap-1'>
            <h1 className="text-white text-lg font-semibold tracking-wide">
              Adnan Ashrafali
            </h1>
            <p className="text-[#9f9f9f] text-sm">
              #101 • Dine In
            </p>
          </div>

          <div className='flex flex-col items-end gap-2'>

            <div className='flex items-center gap-2 
                            bg-green-500/15 text-green-400 
                            px-3 py-1 rounded-lg text-xs font-semibold'>
              <FaCheckDouble />
              Ready
            </div>

            <p className='text-[#9f9f9f] text-xs flex items-center'>
              <FaCircle className='mr-1 text-green-400 text-[8px]' />
              Ready to Serve
            </p>

          </div>
        </div>
      </div>

      <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-[#3a3a3a] to-transparent" />

      <div className='text-[#b5b5b5] text-sm space-y-1'>
        <p>April 30, 2025 • 08:32 PM</p>
        <p>8 Items</p>
      </div>

      <div className='flex justify-between items-center mt-5'>
        <h1 className='text-white text-lg font-semibold'>Total</h1>
        <p className="text-green-400 text-xl font-bold">₹250</p>
      </div>

    </div>
  )
}

export default OrderCard