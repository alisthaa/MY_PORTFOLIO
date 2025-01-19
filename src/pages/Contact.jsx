import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoCall, IoHomeOutline } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
export default function Contact() {
  return <>
   <div className="bg-gray-900 bg-cover bg-center min-h-screen ">
   
   <div className='container relative'>
   
    <div className='absolute  mt-14 md:mt-32'>
    <h1 className="text-4xl font-bold text-blue-400 text-center mb-16 ">Contact Me</h1>
    <div className='flex flex-wrap gap-6 md:gap-96 text-white'>
         <div className='  flex flex-col gap-4 md:gap-10 md:mt-10'>
    <p className='flex items-center gap-2 text-sm md:text-lg font-Lora'><CgMail />alisthashrestha@gmail.com</p>
    <p className='flex items-center gap-2 text-sm md:text-lg font-Lora'><IoCall />+977 9818294831</p>
    <p className='flex items-center gap-2 text-sm md:text-lg font-Lora'>< IoHomeOutline/>Anamnagar, Kathmandu</p>
</div>
<form className='flex flex-col gap-4 md:gap-8 md:w-96 p-5 md:p-10 shadow-inner shadow-white rounded-2xl'>
<Input type="email" placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
<Textarea className="" placeholder="Type your message here." id="message" />
<button type='submit'className='btn'>
Submit
</button>
</form>
    </div>
       
    </div>

</div>
   </div>
  </>
}
