import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return (
    <div className="relative">
      {/* Search Icon to Open Input */}
      {!showSearch && (
        <img
          src={assets.search_icon}
          onClick={() => setShowSearch(true)}
          alt="search"
          className="w-5 cursor-pointer hover:scale-110 transition-transform"
        />
      )}

      {/* Search Input Field with Smooth Animation */}
      <div
        className={`absolute right-0 flex items-center border border-gray-400 px-4 py-2 bg-white rounded-full shadow-md -mt-5
          transition-all duration-100 ease-in-out transform ${
            showSearch ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[-10px] scale-95 pointer-events-none'
          }`}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search the Products"
          className="outline-none bg-inherit text-sm flex-1 w-48 sm:w-64"
        />
        <img
          src={assets.cross_icon}
          className="w-4 ml-2 cursor-pointer"
          onClick={() => setShowSearch(false)}
          alt="close"
        />
      </div>
    </div>
  );
};

export default SearchBar;
