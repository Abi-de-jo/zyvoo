import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTOtal from '../components/CartTOtal';
 
const Cart = () => {
  const { currency, products, cart, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cart[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cart, products]);

  return (
    <div className=" pt-14 mt-10 px-4 sm:px-10 lg:px-20">
      {/* Title */}
      <div className="text-center mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length > 0 ? (
        <>
          {/* Cart Items */}
          <div className="bg-white  rounded-lg overflow-hidden">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div key={index} className="p-4  flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Product Image & Details */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img src={productData.image[0]} className="w-20 h-20 object-cover rounded-lg" alt={productData.name} />
                    <div>
                      <p className="text-lg font-semibold">{productData.name}</p>
                      <div className="text-gray-600 text-sm flex items-center gap-4">
                        <p className="font-medium">{currency}{productData.price}</p>
                        <p className="px-3 py-1 bg-gray-100 rounded-lg text-xs">Size: {item.size}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? null
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      className="w-16 text-center border border-gray-300 rounded-lg py-1"
                    />
                    <img
                      src={assets.bin_icon}
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="w-5 cursor-pointer transition-transform hover:scale-110"
                      alt="Remove"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Total Section */}
          <div className="flex justify-end mt-10">
            <div className="w-full sm:w-[450px]">
              <CartTOtal />

              <div className='w-full text-end '>


                <button className='bg-black text-white text-sm my-8 px-8 py-3' onClick={()=> navigate("/place-order")}>CHECKOUT</button>

              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          Your cart is empty 🛒
        </div>
      )}
    </div>
  );
};

export default Cart;
