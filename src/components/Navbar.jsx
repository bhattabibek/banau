import React from 'react'
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex justify-between px-20 bg-black text-white sticky top-0 z-10 shadow-md '>
      <div>
    <img className='w-40 h-30 object-contain' src="logo.png"/>
      </div>
      <div>
        <ul className='flex flex-row mt-10 gap-4'>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-2'>
      <CiLogin />LOGIN
      
      <MdOutlineAccountCircle />Account
      </div>

    </div>
  )
}

export default Navbar