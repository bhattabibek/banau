import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='md:flex bg-black text-white'>
       <div>
    <img className='w-40 h-30 object-contain' src="logo.png"/>
    <p className='p-5'>Welcome to Banau Autos.<br/> A place where all the Maintainence <br/>of your Autos Takes Place. <br/>We value Our Customers and love our work.</p>
      </div>
      <div className='p-5'>
        <ol>
          <li><b>Quick Links</b></li>
          <li>What We Do</li>
          <li>Login</li>
          <li>Register</li>
          <li>Contact Us</li>

        </ol>
      </div>
 
       <div className='flex inline justify-items-center items-center gap-5 p-5 '> 
        <p>Connect With Us</p>
        <FaFacebook  className='rounded'/> <FaXTwitter /> <FaInstagram /> </div>
    </div>
  )
}

export default Footer