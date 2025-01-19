import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDropdown = () => setIsOpen(false);
  return (
    <header className="bg-gray-800 text-white drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] fixed min-w-full z-10 ">
      <nav className="container mx-auto flex items-center justify-between py-3 md:py-6">
    
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 md:gap-10 items-center justify-start">

            <NavigationMenuItem>
              <Link
                to="/"
                className="md:text-2xl font-semibold hover:text-gray-300 transition-colors duration-200 mr-18 md:mr-52 font-Lora"
              >
                ALISTHA
              </Link>
            </NavigationMenuItem>
<div className="md:hidden">
<DropdownMenu>
          <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu />
          </DropdownMenuTrigger>
          {isOpen && (
            <DropdownMenuContent className='bg-gray-200'>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator className='bg-gray-400'/>
              <DropdownMenuItem onClick={handleCloseDropdown}>
                <Link
                  to="/"
                  className="md:text-2xl hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseDropdown}>
                <Link
                  to="/about"
                  className="md:text-2xl hover:text-gray-300 transition-colors duration-200"
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCloseDropdown}>
                <Link
                  to="/contact"
                  className="md:text-2xl hover:text-gray-300 transition-colors duration-200"
                >
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
</div>
            



<div className="hidden md:flex gap-6 md:gap-10 items-center justify-start ">
    <NavigationMenuItem>
              <Link
                to="/"
                className="md:text-2xl  hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </Link>
            </NavigationMenuItem>

       
            <NavigationMenuItem>
              <Link
                to="/about"
                className="md:text-2xl  hover:text-gray-300 transition-colors duration-200"
              >
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/contact"
                className="md:text-2xl  hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </NavigationMenuItem>
</div>
          


          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
