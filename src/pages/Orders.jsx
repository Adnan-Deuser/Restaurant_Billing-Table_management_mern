import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from "../components/orders/OrderCard"
import BackButton from "../components/shared/BackButton"

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className='bg-[#1f1f1f] h-screen overflow-hidden flex flex-col'>

      <div className='flex items-center justify-between px-10 py-6 shrink-0'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Orders</h1>
        </div>

        <div className='flex items-center gap-2 bg-[#1a1a1a] p-1 rounded-xl border border-white/5'>
          <button 
            onClick={() => setStatus("all")} 
            className={`px-5 py-2 text-sm font-semibold transition-all rounded-lg ${status === "all" ? "bg-[#383838] text-white" : "text-[#ababab]"}`}
          >
            All
          </button>
          <button 
            onClick={() => setStatus("progress")} 
            className={`px-5 py-2 text-sm font-semibold transition-all rounded-lg ${status === "progress" ? "bg-[#383838] text-white" : "text-[#ababab]"}`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setStatus("ready")} 
            className={`px-5 py-2 text-sm font-semibold transition-all rounded-lg ${status === "ready" ? "bg-[#383838] text-white" : "text-[#ababab]"}`}
          >
            Ready
          </button>
          <button 
            onClick={() => setStatus("completed")} 
            className={`px-5 py-2 text-sm font-semibold transition-all rounded-lg ${status === "completed" ? "bg-[#383838] text-white" : "text-[#ababab]"}`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto scrollbar-hide px-10 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>

      <BottomNav />
    </section>
  )
}

export default Orders