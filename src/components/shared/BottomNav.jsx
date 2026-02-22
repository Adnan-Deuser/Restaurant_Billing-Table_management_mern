import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { MdTableBar } from 'react-icons/md'
import { MdOutlineReorder } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal"


const BottomNav = () => {
const navigate = useNavigate();
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal =()=> setIsModalOpen(true);
const closeModal = ()=> setIsModalOpen(false);
const [guests,setGuests] = useState(0);
const addGuest = () =>{
  if(guests >=6) return;
  setGuests((prev)=> prev+1);
}
const subGuest = () =>{
  if(guests <=0) return;
  setGuests((prev)=>prev-1);
}

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around'>
        <button onClick={()=>navigate("/")} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] py-1 w-[200px] rounded-[15px]'><FaHome className="inline mr-2" size={20}/><p>Home</p></button>
        <button onClick={()=> navigate("/orders")} className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><MdOutlineReorder className="inline mr-2" size={20}/><p>Orders</p></button>
        <button onClick={()=> navigate("/tables")} className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><MdTableBar className='inline mr-2' size={20} /><p>Tables</p></button>
        <button className='flex items-center justify-center text-[#ababab] py-1 w-[200px]'><CiCircleMore className="inline mr-2" size={20}/><p>More</p></button>

        <button 
        onClick={openModal}
        className="absolute bottom-6 bg-[#f6b300] text-[#f5f5f5] rounded-full p-3 items-center">
            <BiSolidDish size={30}/>
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
            <div className='flex -tems-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input type="text" name="" placeholder="Enter Customer Name" id=""
              className='bg-transparent flex-1 text-white focus:outline-none'/>
            </div>
          </div>
          <div>
            <label className='block text-[#ababab] mb-2 mt-4 text-sm font-medium'>Phone Number</label>
            <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
              <input type="number" name="" placeholder="+91 9999999999" id=""
              className='bg-transparent flex-1 text-white focus:outline-none tracking-wider'/>
            </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guests</label>
            <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
              <button onClick={subGuest}
               className='text-yellow-500 text-2xl'>&minus;</button>
              <span className='text-white'>{guests}</span>
              <button onClick={addGuest}
               className='text-yellow-500 text-2xl'>&#43;</button>
            </div>
          </div>
          <button onClick={()=> navigate("/tables")}
           className='w-full bg-[#f68100] text-black rounded-lg py-3 mt-8 hover:bg-yellow-600 hover:text-[#f5f5f5]'>
            Create Order
          </button>
        </Modal>
    </div>
  )
}

export default BottomNav;