import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/button'; 

export default function Footer() {
  return (
    <footer className="bg-gray-800  drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <ul className="flex gap-6 mb-4 md:mb-0">
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

          {/* Copyright Notice */}
          <p className="text-sm text-center md:text-left mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Alistha Shrestha. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <a
            as="a"
            href="#top"
            variant="link"
            className="mt-4 md:mt-0 text-white hover:text-blue-500 transition"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
