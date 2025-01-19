import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return <>
  <div className="bg-[url('./assets/images/bg.jpg')] bg-cover bg-center h-screen ">
<div className='container relative'>
<div className='absolute text-white mt-32 md:mt-60'>
     <p className='text-sm md:text-base'>COMPUTER ENGINEER</p>
    <p className='mt-2 text-3xl md:text-5xl  font-Lora'>Hello, It's Alistha Shrestha</p>
    <button type='button' className='btn mt-6'>
        <Link to={"/contact"}>
         Contact Me
        </Link>
    </button>
    <ul className="flex flex-wrap gap-5 mt-6">
      <li>
        <Link to="https://www.facebook.com/alistha.stha">
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/alisthaa.s_/">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/in/alistha-shrestha-5519162a6/">
          <FaLinkedin />
        </Link>
      </li>
      <li>
        <Link to="https://github.com/alisthaa">
          <FaGithub />
        </Link>
      </li>
    </ul>
</div>
   
   
</div>
  </div>
  </>
}
