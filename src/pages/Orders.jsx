import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from "../components/orders/OrderCard"
import BackButton from "../components/shared/BackButton"
import { useState } from "react"

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-hidden'>
      
      <div className='flex items-center justify-between px-8 py-4'>
        <div className='flex items-center gap-2'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-xl font-bold tracking-wide'>Orders</h1>
        </div>

        <div className='flex items-center gap-2'>
          <button onClick={()=> setStatus("all")} 
            className={`text-[#ababab] text-base rounded-lg ${status === "all" && "bg-[#383838] px-5 py-1.5"} px-4 py-1.5 font-semibold`}>
            All
          </button>

          <button onClick={()=> setStatus("progress")} 
            className={`text-[#ababab] text-base rounded-lg ${status === "progress" && "bg-[#383838] px-5 py-1.5"} px-4 py-1.5 font-semibold`}>
            In Progress
          </button>

          <button onClick={()=> setStatus("ready")} 
            className={`text-[#ababab] text-base rounded-lg ${status === "ready" && "bg-[#383838] px-5 py-1.5"} px-4 py-1.5 font-semibold`}>
            Ready
          </button>

          <button onClick={()=> setStatus("completed")} 
            className={`text-[#ababab] text-base rounded-lg ${status === "completed" && "bg-[#383838] px-5 py-1.5"} px-4 py-1.5 font-semibold`}>
            Completed
          </button>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-6 px-8 py-2 overflow-y-scroll h-[calc(100vh-9rem)] no-scrollbar pb-28'>
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

      <BottomNav />
    </section>
  )
}

export default Orders