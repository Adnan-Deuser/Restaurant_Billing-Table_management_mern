import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdTableBar } from 'react-icons/md'
import { MdOutlineReorder } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from 'react-icons/bi';


const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around'>
        <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] py-1 w-[200px] rounded-[15px]'><FaHome className="inline mr-2" size={20}/><p>Home</p></button>
        <button className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><MdOutlineReorder className="inline mr-2" size={20}/><p>More</p></button>
        <button className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><MdTableBar className='inline mr-2' size={20} /><p>Tables</p></button>
        <button className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><CiCircleMore className="inline mr-2" size={20}/><p>More</p></button>

        <buttton className="absolute bottom-6 bg-[#f6b300] text-[#f5f5f5] rounded-full p-3 items-center">
            <BiSolidDish size={30}/>
        </buttton>
    </div>
  )
}

export default BottomNav