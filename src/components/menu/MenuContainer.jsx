import React, { useState } from 'react'
import { menus } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr'
import { getBgColor } from "../../utils/index"

const MenuContainer = () => {

    const [select, setSelect] = useState(menus[0])
    const [items, setItems] = useState({})

    const addItems = (id) => {
        setItems(prev => ({
            ...prev,
            [id]: prev[id] ? Math.min(prev[id] + 1, 4) : 1
        }))
    }

    const subItems = (id) => {
        setItems(prev => ({
            ...prev,
            [id]: prev[id] && prev[id] > 0 ? prev[id] - 1 : 0
        }))
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {
                    menus.map((menu) => {
                        return (
                            <div
                                key={menu.id}
                                className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer'
                                style={{ backgroundColor: menu.bgColor }}
                                onClick={() => setSelect(menu)}
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>
                                        {menu.icon} {menu.name}
                                    </h1>
                                    {select.id === menu.id && (
                                        <GrRadialSelected className='text-white' size={20} />
                                    )}
                                </div>
                                <p className='text-[#ababab] text-sm font-semibold'>
                                    {menu.items.length} Items
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <hr className='border-[#2a2a2a] border-t-2 mt-4' />

            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {
                    select.items.map((menu) => {

                        const uniqueId = `${select.id}-${menu.id}`

                        return (
                            <div
                                key={menu.id}
                                className='flex flex-col items-start justify-between p-4 rounded-lg h-[125px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]'
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>
                                        {menu.name}
                                    </h1>
                                </div>

                                <p className='text-[#f5f5f5] text-lg font-semibold'>
                                    ₹{menu.price}
                                </p>

                                <div className='flex items-center justify-center bg-[#1f1f1f] rounded-lg overflow-hidden w-fit'>
                                    <button
                                        onClick={() => subItems(uniqueId)}
                                        className='px-4 py-2 text-xl sm:px-2 sm:py-1 sm:text-lg text-yellow-500 hover:bg-[#2a2a2a] transition'
                                    >
                                        −
                                    </button>

                                    <span className='px-6 text-white font-semibold text-lg sm:px-3 sm:text-base'>
                                        {items[uniqueId] || 0}
                                    </span>

                                    <button
                                        onClick={() => addItems(uniqueId)}
                                        className='px-4 py-2 text-xl sm:px-2 sm:py-1 sm:text-lg text-yellow-500 hover:bg-[#2a2a2a] transition'
                                    >
                                        +
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuContainer