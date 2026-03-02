import React, { useState } from 'react'

const Register = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleRoleSelection = (selectedRole) =>{
        setFormData({...formData,role: selectedRole})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='block text-[#ababab] mb-2 text-sm font-medium'>
                    Employee Name
                </label>
                <div className="flex items-center rounded-lg px-3 py-4 bg-[#1f1f1f]">
                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter Employee Name'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    /> 
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-2 text-sm font-medium'>
                    Employee Email
                </label>
                <div className="flex items-center rounded-lg py-3 px-4 bg-[#1f1f1f]">
                    <input type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Employee Email'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    /> 
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-2 text-sm font-medium'>
                    Employee Phone
                </label>
                <div className="flex items-center rounded-lg py-3 px-4 bg-[#1f1f1f]">
                    <input type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Enter Employee phone'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    /> 
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-2 text-sm font-medium'>
                    Password
                </label>
                <div className="flex items-center rounded-lg py-3 px-4 bg-[#1f1f1f]">
                    <input type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                        className='bg-transparent flex-1 text-white focus:outline-none'
                        required
                    /> 
                </div>
            </div>
            <div>
                <label className='block text-[#ababab] mb-2 mt-2 text-sm font-medium'>
                    Choose your role
                </label>

                <div className="flex items-center gap-3 mt-4">
                    {["Admin", "Cashier", "Waiter"].map((role) =>{
                        return (
                        <button key={role} type='button'
                        onClick={()=> handleRoleSelection(role)}
                        className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] ${formData.role === role ? "bg-emerald-700 text-white":""}`}>
                            {role}
                        </button>
                        )
                    })}
                </div>
            </div>

            <button type="submit" className='w-full rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold'>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Register