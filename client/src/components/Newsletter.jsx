import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center flex flex-col sm:flex-col      items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter to get the latest news, travel deals, and
            tips delivered straight to your inbox!
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 text-gray-800 border border-gray-300 rounded-lg sm:rounded-r-none focus:outline-none transition-all duration-300 mb-4 sm:mb-0 focus:ring-2 focus:ring-[#306366]"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#306366] text-white rounded-lg sm:rounded-l-none hover:bg-[#306366] transition-all duration-300 focus:ring-2 focus:ring-[#306366]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
