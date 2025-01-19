import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from './About';
import Contact from './Contact';
export default function Home() {
  return <>
  <div className=" bg-[url('./assets/images/bg.jpg')]  bg-cover bg-center h-[70vh] md:h-screen ">

<div className='container relative '>

<div className='absolute text-white mt-32 md:mt-60 '>

     <p className='text-sm md:text-base'>COMPUTER ENGINEER</p>
    <p className='mt-2 text-3xl md:text-5xl  font-Lora'>Hello, It's Alistha Shrestha</p>
    <button type='button' className='btn mt-6'>
        <Link to={"/contact"}>
         Contact Me
        </Link>
    </button>
    <ul className="flex flex-wrap gap-5 mt-6">
      <li>
       <a
                       href="https://www.facebook.com/alistha.stha"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-white hover:text-blue-400 transition"
                     >
                       <FaFacebook size={20} />
                     </a>
      </li>
      <li>
       <a
                       href="https://www.instagram.com/alisthaa.s_/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-white hover:text-pink-400 transition"
                     >
                       <FaInstagram size={20} />
                     </a>
      </li>
      <li>
         <a
                       href="https://www.linkedin.com/in/alistha-shrestha-5519162a6/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-white hover:text-blue-500 transition"
                     >
                       <FaLinkedin size={20} />
                     </a>
      </li>
      <li>
          <a
                        href="https://github.com/alisthaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition"
                      >
                        <FaGithub size={20} />
                      </a>
      </li>
    </ul>
</div>
   
   
</div>
  </div>
  <About/>
  <Contact/>
  </>
}
