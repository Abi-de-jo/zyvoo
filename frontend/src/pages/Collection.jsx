import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router-dom'; // Import Link
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  // ✅ Toggle Category Function
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value)); // REMOVE if already selected
    } else {
      setCategory(prev => [...prev, e.target.value]); // ADD new selection
    }
  };

  console.log(filterProducts,"ABsiheik")

  // ✅ Toggle subCategory Function (FIXED BUG)
  const toggleCategorySub = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]); // ✅ Correctly updates `subCategory`
    }
  };

  // ✅ Apply Filters Function
  const applyFilter = () => {
    let productsCopy = [...products];

    // Filter by Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // Filter by subCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Search Filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Apply Sorting
    if (sortOption === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  // ✅ Apply Filter Whenever Category, subCategory, or Sorting Changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortOption, search, showSearch]);

  // ✅ Set Initial Products
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 my-10 container mx-auto px-4">
      
      {/* FILTER OPTIONS */}
      <div className="min-w-60">
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold text-gray-900"
        >
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            className={`h-4 sm:hidden transform transition-transform ${showFilter ? "rotate-90" : ""}`} 
            alt="Dropdown" 
          />
        </p>

        {/* CATEGORY FILTER */}
        <div className={`bg-gray-50 p-5 mt-6 rounded-lg transition-all ${showFilter ? "block" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-semibold text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Men" onChange={toggleCategory}/>Men
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Women" onChange={toggleCategory}/>Women
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Kids" onChange={toggleCategory}/>Kids
            </label>
          </div>
        </div>

        {/* subCategory FILTER */}
        <div className={`bg-gray-50 p-5 mt-6 rounded-lg transition-all ${showFilter ? "block" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-semibold text-gray-800">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Topwear" onChange={toggleCategorySub}/>Topwear
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Bottomwear" onChange={toggleCategorySub}/>Bottomwear
            </label>
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-gray-800" value="Winterwear" onChange={toggleCategorySub}/>Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (PRODUCT LIST & SORTING) */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
          <Title text1="All" text2="Collection" />

          {/* PRODUCT SORT */}
          <select 
            className="border-2 border-gray-400 text-sm px-3 py-2 rounded-md "
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((product, index) => (
              <Link to={`/product/${product._id}`} key={index}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image[0]} 
                      alt={product.name} 
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-md font-medium text-gray-800">{product.name}</h3>
                    <p className="text-lg font-semibold text-gray-800 mt-2">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
