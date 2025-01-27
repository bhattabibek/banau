import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
    <div className='flex justify-between bg-yellow-300 px-20'>
    <div className=' p-2'>Welcome to Banau Autos</div>
    <div className='flex inline justify-items-center items-center'> <FaFacebook /> <FaXTwitter /> <FaInstagram /> </div>
    </div>
    </>
  )
}

export default Topbar