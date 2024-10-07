import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-textColor w-full">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:hoverColor transition duration-300"
          >
            wavv
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="discover"
            spy={true}
            smooth={true}
            duration={500}
            className="text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          >
            Discover
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <FaTimes size={24} className="text-textColor" />
            ) : (
              <FaBars size={24} className="text-textColor" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden text-textColor text-center py-6 space-y-4 transition duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="block text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="discover"
          spy={true}
          smooth={true}
          duration={500}
          className="block text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          Discover
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          duration={500}
          className="block text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          Testimonials
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="block text-textColor hover:text-hoverColor transition duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
