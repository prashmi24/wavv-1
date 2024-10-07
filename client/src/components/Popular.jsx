import React from "react";
import { HiLocationMarker, HiStar } from "react-icons/hi";
import popular1 from "../assets/popular/popular1.jpg";
import popular2 from "../assets/popular/popular2.jpg";
import popular3 from "../assets/popular/popular3.jpg";

const popularDestinations = [
  {
    id: 1,
    name: "Mountain View Inn",
    location: "Aspen, Colorado, USA",
    image: popular1,
    rating: 4.9,
    reviews: "(2k Reviews)",
    price: "$500 per night",
  },
  {
    id: 2,
    name: "Sunset Paradise Hotel",
    location: "Santorini, Greece",
    image: popular2,
    rating: 5,
    reviews: "2.9k Reviews",
    price: "$350 per night",
  },
  {
    id: 3,
    name: "Riverside Retreat Hotel",
    location: "Kyoto, Japan",
    image: popular3,
    rating: 4.8,
    reviews: "2k Reviews",
    price: "$250 per night",
  },
];

const Popular = () => {
  return (
    <section id="popular">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 animate-fadeIn">
            Popular Hotels
          </h2>
          <p className="text-4xl font-bold text-gray-900 animate-fadeUp">
            Discover some of the world’s most beautiful hotels.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn cursor-pointe">
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-classyWhite shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                className="w-full h-56 object-cover"
                src={destination.image}
                alt={destination.name}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-classyNavy mb-2">
                  {destination.name}
                </h3>
                <p className="text-textColor mb-4">
                  <HiLocationMarker className="mr-1" />
                  {destination.location}
                </p>
                {/* Rating */}
                <div className="flex items-center mb-2">
                  {Array.from(
                    { length: Math.floor(destination.rating) },
                    (_, index) => (
                      <HiStar key={index} className="text-yellow-400 mr-1" />
                    )
                  )}
                  {/* Show half-star for decimal ratings */}
                  {destination.rating % 1 !== 0 && (
                    <HiStar className="text-yellow-400 mr-1 opacity-50" />
                  )}
                  <span className="text-textColor ml-2">
                    {destination.rating} ({destination.reviews})
                  </span>
                </div>
                <p className="text-lg font-semibold text-classyNavy">
                  {destination.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
