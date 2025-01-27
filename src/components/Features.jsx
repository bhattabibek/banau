import React from 'react'
import { FaRegMap } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { FaUsersViewfinder } from "react-icons/fa6";

const Features = () => {
  return (
    <>
    <div className='features flex flex-col md:flex md:flex-wrap lg:flex-row' >
      <div className='feat'>1000 + APP Download <FaRegMap size={70}/></div>
      <div className='feat'>20 + Service Centers <FaCar size={70} /></div>
      <div className='feat'>30 + Mantainence <VscTools size={70} /></div>
      <div className='feat'>500 + Customers <FaUsersViewfinder  size={70}/></div>
    </div>
    </>
  )
}

export default Features