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

        <div className='absolute inset-0 bg-black bg-opacity-80'></div>

        <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl italic text-white'>
          "Serve the customers the best food with prompt and friendly service in a welcoming atmosphere, and they'll keep coming back."
          <br />
          <span className='block mt-4 text-yellow-400'>- Founder of Restro</span>
        </blockquote>
      </div>

      <div className='w-1/2 min-h-screen bg-[#1a1a1a] p-4'>
        <div className="flex flex-col items-center gap-1">
          <img src={logo} alt="Restaurant Logo" className='h-14 w-14 border-2 rounded-full p-1'/>
          <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-widest'>Restro</h1>
        </div>

        <h2 className='text-4xl text-center mt-2 font-semibold text-yellow-500 mb-5'>
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>

        {isRegister ? <Register /> : <Login />}

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