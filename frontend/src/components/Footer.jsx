import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zyvoo<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-600 text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">COMPANY</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-900 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900 transition-colors duration-300">About us</Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-gray-900 transition-colors duration-300">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-900 transition-colors duration-300">Privacy policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">GET IN TOUCH</h3>
          <ul className="text-gray-600 space-y-2">
            <li>+1-000-000-0000</li>
            <li>zyvoo@gmail.com</li>
            <li>
              <a href="https://instagram.com" className="hover:text-gray-900 transition-colors duration-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-10 border-t pt-4">
        Copyright 2025© Zyvoo.in - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
