import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from '../context/ShopContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

        {/* Logo */}
        <NavLink to="/">
          <img src="./zy.png" alt="zyvoo" className="w-16 cursor-pointer" />
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-8 text-sm text-gray-800 font-medium">
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((text, index) => (
            <li key={index} className="relative group">
              <NavLink 
                to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`} 
                className="flex flex-col items-center gap-1 hover:text-black transition duration-300"
              >
                <p>{text}</p>
                <span className="w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons & Search */}
        <div className="flex items-center gap-6">
          <SearchBar />

          {/* Profile Icon with Dropdown */}
          <div className="relative">
          <Link to="/login">
          
          <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer hover:scale-110 transition-transform"
              alt="profile"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </Link>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-10 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 py-3 px-4 text-gray-600">
                  <NavLink to="/profile" className="hover:text-black cursor-pointer">My Profile</NavLink>
                  <NavLink to="/orders" className="hover:text-black cursor-pointer">Orders</NavLink>
                  <p className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="cart" />
            <p className="absolute right-[-2px] top-[9px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>

          {/* Hamburger Menu Icon for Mobile */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt="menu"
          />
        </div>

        {/* SIDE BAR FOR MOBILE */}
        <div className={`fixed top-0 right-0 h-full w-[200px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-20 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col text-gray-600 h-full'>
            {/* Close Button */}
            <div onClick={() => setVisible(false)} className='flex items-center cursor-pointer p-4'>
              <img src={assets.dropdown_icon} className='rotate-180 h-4' alt="close" />
              <p className='cursor-pointer'> &nbsp; Back</p>
            </div>

            {/* Navigation Links for Mobile */}
            <NavLink className="py-2 pl-6 border-t border-gray-200" to="/" onClick={() => setVisible(false)}> HOME</NavLink>
            <NavLink className="py-2 pl-6 border-t border-gray-200" to="/about" onClick={() => setVisible(false)}> ABOUT</NavLink>
            <NavLink className="py-2 pl-6 border-t border-gray-200" to="/collection" onClick={() => setVisible(false)}> COLLECTION</NavLink>
            <NavLink className="py-2 pl-6 border-t border-gray-200" to="/contact" onClick={() => setVisible(false)}> CONTACT</NavLink>

            <div className='mt-auto mb-4 px-6'>
              <button className='w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
