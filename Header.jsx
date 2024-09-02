import React from 'react'
import { CiSearch,CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <div className='nav bg-black w-full
    h-[15vh]'>
      <div className='flex justify-between w-[150vh] h-full ml-44  px-2 py-1 '>
        <div className='h-full text-white text-3xl font-bold w-[40vh] px-0 py-4
        '> <h2 className='ml-5'>Ecommerce</h2></div>
        <div className='h-full gap-1 flex flex-col w-[105vh]'>
          <div className=' flex h-5 text-white justify-end items-center gap-3 '>
            <span>Order</span>
            <span>Profile</span>
            <span>Layout</span>
            <span>More</span>
          </div>
          <div className=' h-8 flex'><div className='w-[85vh] py-1 h-full flex gap'><div>
            <input className='w-[72vh] text-sm left-1' type="text" placeholder='Search for Products, Brands and More' /></div>
            <div className='bg-yellow-300 h-[20px] mt-[2px] w-10 px-3 '> <CiSearch className='mt-1 font-bold text-sm' /></div></div><div className='w-28 bg-gray-400 flex gap-2'><div><CiShoppingCart  className='text-2xl mt-1 ml-2 font-bold'/></div>
            <div className='text-lg font-semibold'>Cart</div></div></div>
        </div>
      </div>
    </div>
  )
}

export default Header