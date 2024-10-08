import React from "react";
import { FaComments, FaRegEye } from "react-icons/fa";
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpeg";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    title: "Foodie's Guide to Global Cuisine",
    category: "Travel & Food",
    comments: 45,
    views: "24k+",
  },
  {
    id: 2,
    image: blog2,
    title: "How to Travel on a Budget?",
    category: "Travel Tips",
    comments: 32,
    views: "18k+",
  },
  {
    id: 3,
    image: blog3,
    title: "The Ultimate Guide to Solo Travel",
    category: "Adventure",
    comments: 50,
    views: "29k+",
  },
];

const BlogCard = ({ image, title, category, comments, views }) => (
  <div className="shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <p className="text-sm text-textColor mb-2">{category}</p>
      <h3 className="text-xl font-semibold text-textColor mb-4">{title}</h3>
      <div className="flex justify-between items-center text-textColor">
        <span className="flex items-center">
          <FaComments className="mr-2" /> {comments} Comments
        </span>
        <span className="flex items-center">
          <FaRegEye className="mr-2" /> {views} Views
        </span>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 animate-fadeInDown">
            Our Latest Blogs
          </h2>
          <p className="text-4xl font-bold text-gray-900 animate-fadeInUp">
            Discover inspiring stories, tips, and guides from our expert
            travelers.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              category={post.category}
              comments={post.comments}
              views={post.views}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
