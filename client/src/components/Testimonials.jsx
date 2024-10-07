import React from "react";
import { HiStar } from "react-icons/hi";
import test1 from "../assets/testimonials/test1.jpg";
import test2 from "../assets/testimonials/test2.jpg";
import test3 from "../assets/testimonials/test3.jpg";

const testimonials = [
  {
    name: "Jane Doe",
    review:
      "This travel agency made my vacation unforgettable! The customer service was excellent, and the booking process was smooth and easy.",
    rating: 5,
    image: test1,
  },
  {
    name: "John Smith",
    review:
      "I had an amazing experience exploring new destinations. The team was very helpful in planning everything. Highly recommend!",
    rating: 5,
    image: test2,
  },
  {
    name: "Emily Johnson",
    review:
      "Fantastic service! Everything was taken care of, and I didn’t have to worry about a thing. Looking forward to my next trip!",
    rating: 5,
    image: test3,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-4xl font-bold text-gray-900">
            Hear from our happy travelers who have had wonderful experiences
            with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-lg text-gray-800 text-center">
                "{testimonial.review}"
              </p>
              <div className="mt-4 flex justify-center items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400" size={24} />
                ))}
              </div>
              <h4 className="text-center text-lg font-semibold text-gray-700 mt-4">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
