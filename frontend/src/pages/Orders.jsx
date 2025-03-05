import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-16 mt-8 max-w-6xl mx-auto px-4">
      {/* Page Title */}
      <div className="text-center">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* Orders List */}
      <div className="mt-10 space-y-6">
        {products.slice(3, 8).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-5 rounded-lg shadow-md"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full sm:w-2/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="w-full">
                <p className="text-lg font-semibold text-gray-900 truncate sm:whitespace-normal sm:text-wrap">
                  {window.innerWidth < 640
                    ? item.name.split(" ").slice(0, 2).join(" ") + "..."
                    : item.name}
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <p className="font-medium">{currency}{item.price}</p>
                  <p>Qty: 1</p>
                  <p className="hidden sm:inline-block">Size: M</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Date: <span className="text-gray-400">25, Jan 2025</span>
                </p>
              </div>
            </div>

            {/* Order Status & Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-1/3">
              <p className="text-xs sm:text-sm text-green-600 font-semibold">🟢 Ready to Ship</p>
              <button className="px-4 py-2 text-sm sm:text-base font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
