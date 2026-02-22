import React from 'react'

const tableCard = ({key,name,status,initials}) => {
  return (
    <div key={key} className='w-[350px] hover:bg-zinc-700 bg-[#262625] p-4 rounded-lg mb-4 cursor-pointer'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
        <p className={`${status ==="Booked"? "text-green-600 bg-[#2e4a40]":"text-yellow-50 bg-yellow-600"} px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className='flex items-center justify-center my-5'>
        <h1 className={`${status==="Booked"?"bg-red-600 text-white px-6 py-5 rounded-full text-xl":"bg-green-600"} text-white px-6 py-5 rounded-full text-xl"}`}>{initials}</h1>
      </div>
    </div>
  )
}

export default tableCard