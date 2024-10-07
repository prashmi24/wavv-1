import React from "react";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";

const images = [
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
];

const randomHeightClasses = ["h-80"];

const Gallery = () => {
  return (
    <section>
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-semibold text-gray-800">Our Gallery</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Capture Unforgettable Moments
        </h2>
        <div className="masonry sm:masonry-sm md:masonry-md gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                randomHeightClasses[
                  Math.floor(Math.random() * randomHeightClasses.length)
                ]
              }`}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
