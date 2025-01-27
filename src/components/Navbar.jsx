import React from 'react'
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex p-1'>
      <div>
    <img className='w-40' src='http://banauautos.uplogictech.com/uploads/app_logo/logo.png'/>
      </div>
      <div className='flex justify-center items-center'>
      <CiLogin />
      <MdOutlineAccountCircle />
      </div>

    </div>
  )
}

export default Navbar