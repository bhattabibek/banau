import React from 'react'
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex justify-between px-20 '>
      <div>
    <img className='w-40 h-30 object-contain' src="logo.png"/>
      </div>
      <div className='flex justify-center items-center'>
      <CiLogin />LOGIN
      
      <MdOutlineAccountCircle />Account
      </div>

    </div>
  )
}

export default Navbar