import React from 'react'
import { popularDishes } from '../../constants'

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
      <div className="w-full rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] shadow-lg p-4">
        
        <div className="flex justify-between items-center mb-4 px-2">
          <h1 className='text-[#f5f5f5] text-lg font-bold tracking-wide'>Popular Dishes</h1>
          <a href="#" className='text-[#1e90ff] text-sm font-medium hover:text-[#63b3ed] hover:underline'>View all</a>
        </div>

        <div className="overflow-y-scroll h-[680px] scrollbar-thin scrollbar-thumb-[#1e90ff]/50 scrollbar-track-transparent space-y-3 px-2 scrollbar-hide">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-4 bg-[#121212] rounded-xl p-3 hover:bg-[#1e1e2a] transition-colors duration-300 border border-[#1a1a2f] shadow-md"
            >
              <h1 className='text-[#5ca576] font-bold text-lg w-6'>
                {dish.id < 10 ? `0${dish.id}` : dish.id}
              </h1>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-12 h-12 rounded-[20px] border-2 border-[#0fb145] shadow-sm"
              />
              <div className="flex-1">
                <h1 className='text-emerald-400 font-semibold tracking-wide'>{dish.name}</h1>
                <p className='text-neutral-200 text-sm mt-1'>
                  Orders: {dish.numberOfOrders}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default PopularDishes