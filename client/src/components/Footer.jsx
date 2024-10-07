import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/footer/logo.png";
import footer1 from "../assets/footer/footer1.jpg";
import footer2 from "../assets/footer/footer2.jpg";
import footer3 from "../assets/footer/footer3.jpg";
import footer4 from "../assets/footer/footer4.jpg";
import footer5 from "../assets/footer/footer5.jpg";
import footer6 from "../assets/footer/footer6.jpg";

const Footer = () => {
  return (
    <footer className="bg-classyNavy text-classyWhite py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fadeIn">
            <img src={logo} alt="wavv Logo" className="mb-4 w-32" />
            <p className="text-textColor">
              Have questions or need assistance? Our friendly customer support
              team is here to help. Get in touch with us via phone, email, or
              live chat, and we'll gladly assist you with any inquiries or
              concerns. Your satisfaction is our top priority!
            </p>
            <h5 className="text-lg font-bold text-textColor mt-6 mb-2">
              Follow us on:
            </h5>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-hoverColor transition duration-300"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-hoverColor transition duration-300"
              >
                <FaTwitterSquare size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-hoverColor transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-hoverColor transition duration-300"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h5 className="text-lg font-bold text-textColor mb-4">Services</h5>
            <ul className="text-textColor space-y-2">
              <li className="hover:text-hoverColor transition duration-300">
                <a href="#">Flight Booking</a>
              </li>
              <li className="hover:text-hoverColor transition duration-300">
                <a href="#">Hotel Reservations</a>
              </li>
              <li className="hover:text-hoverColor transition duration-300">
                <a href="#">Car Rentals</a>
              </li>
              <li className="hover:text-hoverColor  transition duration-300">
                <a href="#">Travel Insurance</a>
              </li>
              <li className="hover:text-hoverColor  transition duration-300">
                <a href="#">Destination Guides</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h5 className="text-lg font-bold text-textColor mb-4">
              Contact Info
            </h5>
            <ul className="text-textColor space-y-4">
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+1 812-125-1251</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>Mon-Fri 9:00-18:00</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                <span>123 Travel Street, City</span>
              </li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h5 className="text-lg font-bold text-textColor mb-4">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              <img
                src={footer1}
                alt="Gallery Image 1"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
              <img
                src={footer2}
                alt="Gallery Image 2"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
              <img
                src={footer3}
                alt="Gallery Image 3"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
              <img
                src={footer4}
                alt="Gallery Image 4"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
              <img
                src={footer5}
                alt="Gallery Image 5"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
              <img
                src={footer6}
                alt="Gallery Image 6"
                className="w-full h-20 object-cover rounded-sm transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-lightSlate mt-8 pt-4 text-center">
          <p className="text-lightSlate">
            &copy; {new Date().getFullYear()} wavv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
