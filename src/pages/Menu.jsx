import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/menu/MenuContainer'

const Menu = () => {
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
                  <h1 className="text-md text-white font-semibold">Customer Name</h1>
                  <p className="text-xs text-white font-medium">Table No.2</p>
              </div>
          </div>
        </div>
      </div>
      <MenuContainer />
     </div>
      <div className="flex-[1] bg-amber-600">
      </div>

      <BottomNav />
    </section>
  )
}

export default Menu