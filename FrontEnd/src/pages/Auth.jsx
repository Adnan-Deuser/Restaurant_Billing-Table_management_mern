import React, { useState } from 'react'
import Restaurant from "../assets/images/restaurant-img.jpg"
import logo from "../assets/logo.png"
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
const Auth = () => {

  const[isRegister, setIsRegister] = useState(false)

  return (
    <div className='flex min-h-screen w-full overflow-hidden'>
      <div className='w-1/2 relative flex items-center justify-center bg-cover min-h-screen'>
        <img className="w-full h-full object-cover" src={Restaurant} alt="Restaurant Image" />

        <div className='absolute inset-0 bg-black bg-opacity-60'></div>

<blockquote className="absolute bottom-6 
                       text-2xl leading-relaxed font-light 
                       text-gray-100">
  
  <span className="text-yellow-400 text-5xl font-serif">“</span>
  Great restaurants don’t just serve food —
  they serve memories.
  
  <span className="text-yellow-400 text-5xl font-serif">”</span>

  <span className="block mt-6 text-lg tracking-wider 
                   text-yellow-400 font-semibold uppercase">
    — Restro Philosophy
  </span>
</blockquote>
      </div>

      <div className="w-1/2 min-h-screen p-4
                bg-gradient-to-br
                from-[#0b1120]
                via-[#111827]
                to-[#2a1f05]">
        <div className="flex flex-col items-center gap-1">
          <img src={logo} alt="Restaurant Logo" className='h-14 w-14 border-2 rounded-full p-1'/>
          <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-widest'>Restro</h1>
        </div>

          <h2 className="text-4xl text-center mt-2 mb-5 
                        font-extrabold 
                        tracking-tight
                        bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500
                        bg-clip-text text-transparent">
            {isRegister ? "Employee Registration" : "Employee Login"}
          </h2>

        {isRegister ? <Register setIsRegister={setIsRegister}/> : <Login />}

        <div className="flex justify-center mt-6">
          <p className='text-md text-[#ababab]'>
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </p>
          <a onClick={() =>setIsRegister(!isRegister)}
          href="#" className='text-yellow-400 font-semibold hover:underline'>
            {isRegister? " Sign In" : " Sign Up"}
          </a>
        </div>

      </div>
    </div>
  )
}

export default Auth