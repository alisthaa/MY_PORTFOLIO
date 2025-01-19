import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { CgMail } from "react-icons/cg";
import { IoCall, IoHomeOutline } from "react-icons/io5";
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';  // Correct import for shadcn toast
import { Button } from '@/components/ui/button';

export default function Contact() {
  const form = useRef();
  const { toast } = useToast(); // Initialize toast hook

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_123', 
        'template_123', 
        form.current,
        'RQCF2256cbU7MdSF8'
      )
      .then(
        () => {
          // Success Toast
         
          form.current.reset(); // Reset the form after submission
          alert('email sent succesfully')
        },
        () => {
          // Error Toast
          alert('error sending email')
        }
      );
  };

  return (
    <div className="bg-gray-900 bg-cover bg-center min-h-screen">
      <div className="container relative">
        <div className="absolute mt-14 md:mt-32">
          <h1 className="text-4xl font-bold text-blue-400 text-center mb-16">Contact Me</h1>
          <div className="flex justify-center flex-wrap gap-6 md:gap-96 text-white">
            <div className="flex flex-col gap-4 md:gap-10 md:mt-10">
              <p className="flex items-center gap-2 text-sm md:text-lg font-Lora">
                <CgMail /> alisthashrestha@gmail.com
              </p>
              <p className="flex items-center gap-2 text-sm md:text-lg font-Lora">
                <IoCall /> +977 9818294831
              </p>
              <p className="flex items-center gap-2 text-sm md:text-lg font-Lora">
                <IoHomeOutline /> Anamnagar, Kathmandu
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 md:gap-8 md:w-96 p-5 md:p-10 shadow-inner shadow-white rounded-2xl"
            >
              <Input type="text" name="name" placeholder="Enter your name" required />
              <Input type="email" name="email" placeholder="Enter your email" required />
              <Textarea name="message" placeholder="Type your message here." required />
              <button  type="submit" className="btn">Submit</button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}
