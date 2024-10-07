import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {/* Floating CTA Button */}
      <div
        className={`fixed bottom-6 right-6 bg-[#306366] text-backgroundColor p-4 rounded-full shadow-lg cursor-pointer transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-20"
        } hover:scale-110 hover:bg-accentColor hover:text-textColor`}
        onClick={scrollToTop}
        style={{ zIndex: 1000 }}
      >
        <FaArrowUp size={24} />
      </div>

      {/* Main CTA Button */}
      <div className="fixed bottom-20 right-6">
        <button className="bg-[#306366] hover:bg-accentColor hover:text-textColor text-backgroundColor font-semibold py-3 px-6 rounded-lg shadow-lg animate-bounce">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingCta;
