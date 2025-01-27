import React from 'react'
import { FaRegMap } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { FaUsersViewfinder } from "react-icons/fa6";

const Features = () => {
  return (
    <>
    <div className='features'>
      <div className='feat'>1000 + APP Download <FaRegMap/></div>
      <div className='feat'>20 + Service Centers <FaCar /></div>
      <div className='feat'>30 + Mantainence <VscTools /></div>
      <div className='feat'>500 + Customers <FaUsersViewfinder /></div>
    </div>
    </>
  )
}

export default Features