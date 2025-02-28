import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link 
      className="block bg-white rounded-lg overflow-hidden transition-shadow duration-300 cursor-pointer" 
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-md font-medium text-gray-800">{name}</h3>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
