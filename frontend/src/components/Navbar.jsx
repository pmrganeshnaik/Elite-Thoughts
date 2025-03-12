import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Edit3 } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <div className="w-full">
     <nav className="sticky top-0 left-0 w-full bg-[#F5F5F5] shadow-md z-50 px-6 ">
      <div className="w-full container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src="/logo.png" alt="Elite Thoughts" className="h-12" />
              
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-[#0A192F] hover:text-[#0A192F]/80 font-medium transition duration-200">
              Home
            </NavLink>
            <NavLink to="/about" className="text-[#0A192F] hover:text-[#0A192F]/80 font-medium transition duration-200">
              About
            </NavLink>
            <NavLink to="/views" className="text-[#0A192F] hover:text-[#0A192F]/80 font-medium transition duration-200">
              View
            </NavLink>
            <NavLink to="/help" className="text-[#0A192F] hover:text-[#0A192F]/80 font-medium transition duration-200">
              Help
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavLink to="/new-post">
              <button className="flex items-center px-5 py-2 bg-[#FFD700] text-[#0A192F] font-medium rounded-full hover:bg-[#FFD700]/90 transition duration-200 shadow-sm">
                <Edit3 size={18} className="mr-2" />
                New Blog
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#0A192F] hover:text-[#0A192F]/80 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 text-[#0A192F] font-medium hover:bg-[#0A192F]/10 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 text-[#0A192F] font-medium hover:bg-[#0A192F]/10 rounded-md"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/views"
              className="block px-3 py-2 text-[#0A192F] font-medium hover:bg-[#0A192F]/10 rounded-md"
              onClick={toggleMenu}
            >
              View
            </NavLink>
            <NavLink
              to="/help"
              className="block px-3 py-2 text-[#0A192F] font-medium hover:bg-[#0A192F]/10 rounded-md"
              onClick={toggleMenu}
            >
              Help
            </NavLink>
            <NavLink
              to="/new-post"
              className="block px-3 py-2"
              onClick={toggleMenu}
            >
              <button className="flex items-center w-full px-4 py-2 bg-[#FFD700] text-[#0A192F] font-medium rounded-full hover:bg-[#FFD700]/90 transition duration-200">
                <Edit3 size={18} className="mr-2" />
                New Blog
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
   </div>
  );
}

export default Navbar;