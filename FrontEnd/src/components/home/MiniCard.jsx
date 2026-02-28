import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  const isEarnings = title === "Total Earnings";

  return (
    <div className={`
        w-[50%] rounded-xl py-5 px-6 shadow-lg backdrop-blur-sm bg-[#0f111a]/50 border border-[#1a1a2a]
        hover:scale-[1.03] hover:shadow-2xl transition-all duration-300
        ${isEarnings ? "border-green-700" : "border-yellow-800"}
      `}>
      
      <div className='flex items-start justify-between'>
        <h1 className='text-emerald-400 text-lg font-semibold tracking-wide drop-shadow-md'>
          {title}
        </h1>
        <div className={`
            p-3 rounded-lg text-white text-2xl flex items-center justify-center shadow-md
            ${isEarnings ? "bg-green-500" : "bg-yellow-500"}
          `}>
          {icon}
        </div>
      </div>

      <div className='mt-5'>
        <h1 className='text-white text-4xl font-extrabold drop-shadow-lg'>
          {isEarnings ? `₹${number}` : number}
        </h1>
        <p className='text-white text-lg mt-2'>
          <span className='text-emerald-400 font-semibold'>{footerNum}%</span> than yesterday
        </p>
      </div>
    </div>
  )
}

export default MiniCard