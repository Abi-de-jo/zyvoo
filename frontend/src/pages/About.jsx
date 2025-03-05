import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About <span className="text-blue-600">Zyvoo</span></h1>
        <p className="mt-4 text-lg text-gray-600">
          Elevate your style with trendy and premium fashion at Zyvoo – Your one-stop online clothing store.
        </p>
      </div>

      {/* Brand Story */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={assets.about_img}
            alt="Fashion"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Zyvoo was founded with a vision to redefine online fashion. We believe that clothing should be a blend of comfort, elegance, and affordability.
            Our collections are carefully curated to bring you the latest trends while maintaining top-notch quality.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Why Choose Zyvoo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900">Premium Quality</h3>
            <p className="text-gray-600 mt-2">We ensure that all our products are made with high-quality materials to offer durability and comfort.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900">Trendy Styles</h3>
            <p className="text-gray-600 mt-2">Stay ahead of fashion trends with our fresh, modern, and stylish collections.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900">Affordable Prices</h3>
            <p className="text-gray-600 mt-2">Get the best styles at prices that don’t break the bank. Fashion for all, at the right price.</p>
          </div>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-600">
          A passionate team of fashion enthusiasts and e-commerce experts, dedicated to bringing you the best shopping experience.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <img
            src="./profile.avif"
            alt="Team member"
            className="rounded-full w-20 h-20 border border-gray-300 object-cover"
          />
          <img
            src="./profile1.avif"
            alt="Team member"
            className="rounded-full w-20 h-20 border border-gray-300 object-cover"
          />
          <img
            src="./profile3.webp"
            alt="Team member"
            className="rounded-full w-20 h-20 border border-gray-300 object-cover"
          />
         
         
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Join the Zyvoo Fashion Movement</h2>
        <p className="mt-4 text-gray-600">
          Stay updated with our latest collections, exclusive discounts, and style inspiration.
        </p>
        <a
          href="/collection"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default About;
