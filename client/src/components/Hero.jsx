import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[600px] flex flex-col justify-center items-center text-center text-textColor bg-cover bg-center rounded-[25px] mx-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Hero Content */}
      <div className="z-20 px-4 md:px-0">
        <h1 className="text-backgroundColor text-4xl md:text-6xl font-bold mb-4 animate-fadeInDown font-black">
          Experience the World, Your Way!
        </h1>
        <p className="text-lg md:text-xl text-backgroundColor mb-6 animate-fadeInUp font-semibold">
          Discover exciting destinations, find amazing deals, and book your
          dream vacation hassle-free.
        </p>
        <div className="flex justify-center">
          <Link
            to="discover"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-flex items-center bg-backgroundColor text-textColor py-3 px-8 rounded-full font-semibold text-lg hover:bg-secondaryColor hover:text-textColor transition duration-300 animate-bounceInUp"
          >
            Explore
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
