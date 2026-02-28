import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/menu/MenuContainer'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { FaNotesMedical } from 'react-icons/fa6'
import CustomerInfo from '../components/menu/CustomerInfo'
import CartDetails from '../components/menu/CartDetails'
import Bill from '../components/menu/Bill'
import { useSelector } from 'react-redux'

const Menu = () => {

  const customerData = useSelector((state) => state.customer)
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      <div className="flex-[3] bg-slate-800">
      <div className='flex items-center justify-between px-8 py-4'>
        <div className='flex items-center gap-2'>
          <BackButton />
          <h1 className='text-white text-xl font-bold tracking-wide'>Menu</h1>
        </div>

        <div className='flex items-center gap-2'>
          <div className="flex items-center gap-4 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                  <h1 className="text-md text-white font-semibold">{customerData.customerName || "Customer Name"}</h1>
                  <p className="text-xs text-white font-medium">{customerData.tableNo || "N/A"}</p>
              </div>
          </div>
        </div>
      </div>
      <MenuContainer />
     </div>
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[630px] rounded-lg pt-2 overflow-y-auto no-scrollbar">
        <CustomerInfo />
        <hr className='border-[#2a2a2a] border-t-2' />
        <CartDetails />
        <hr className='border-[#2a2a2a] border-t-2' />        
        <Bill />
      </div>


      <BottomNav />
    </section>
  )
}

export default Menu