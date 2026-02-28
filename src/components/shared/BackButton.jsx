import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate= useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className='bg-purple-800 p-2 text-xl font-bold rounded-full text-white hover:bg-opacity-70'>
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton