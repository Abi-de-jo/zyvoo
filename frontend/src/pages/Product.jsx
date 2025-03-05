import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets, products } from "../assets/frontend_assets/assets";
import Related from "../components/Related";

const Product = () => {
  const { productId } = useParams();
  const { currency , addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(""); 
  const [activeTab, setActiveTab] = useState("description");
 
  useEffect(() => {
    const getProduct = () => {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]); // Set first image as default
      }
    };

    getProduct();
  }, [productId]);
 

  return productData ? (
    <div className="mt-14 pt-10 transition-opacity ease-in duration-500 opacity-100 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Product Images */}
        <div className="flex-1 flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 overflow-hidden">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                  image === img ? "border-2 border-black" : "border"
                }`}
                onClick={() => setImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              className="w-full h-[450px] object-cover rounded-lg"
              src={image}
              alt="Product"
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-900">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <img key={i} src={assets.star_icon} className="w-4" alt="star" />
              ))}
            <img src={assets.star_dull_icon} className="w-4" alt="star" />
            <p className="text-gray-600 pl-2">(122)</p>
          </div>

          {/* Price */}
          <p className="mt-5 text-4xl font-bold text-gray-900">
            {currency} {productData.price}
          </p>

          {/* Description */}
          <p className="mt-5 text-gray-700 leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selection */}
          <p className="mt-5 font-semibold text-gray-900">Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setSize(item)}
                className={`w-10 h-10 bg-gray-200 text-gray-600 text-lg rounded-lg flex items-center justify-center 
                  border ${size === item ? "border-black" : "border-gray-300"}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-auto py-3 px-8 bg-black text-white rounded-lg"  onClick={()=>addToCart(productData._id,size)}>
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/8" />

          {/* Additional Info */}
          <div className="mt-6 text-gray-600 text-sm">
            <p>✅ 100% Original product.</p>
            <p>💳 Cash on delivery is available on this product.</p>
            <p>🔄 Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-20">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-8 py-4 text-sm font-semibold ${
              activeTab === "description"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-8 py-4 text-sm font-semibold ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            Reviews (122)
          </button>
        </div>

        {/* Description & Reviews Content */}
        <div className="py-8 text-gray-600">
          {activeTab === "description" ? (
            <div>
              <p>{productData.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium Quality Material</li>
                <li>Modern Design and Comfort</li>
                <li>Perfect for Daily Use</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, ].map((star) => (
                      <img key={star} src={assets.star_icon} className="w-4" alt="star" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">John D. - 2 days ago</span>
                </div>
                <p className="text-gray-600">Great product, exactly as described!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
   
      <Related productData={productData} currency={currency} />
      </div>
    </div>
  ) : null;
};

export default Product;
