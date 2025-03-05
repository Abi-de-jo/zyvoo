import {createContext, useEffect, useState} from 'react'
import {products} from "../assets/frontend_assets/assets"
import { toast } from 'react-toastify';

import {useNavigate} from 'react-router-dom';
 
export const ShopContext = createContext();

const ShopContextProvider =(props)=>{

    const currency = "Rs.";
    const delivery_fee = 10;
    const [search,setSearch ]= useState("");
    const [showSearch , setShowSearch] = useState(false)
    const [cart, setCart] = useState({});

const navigate = useNavigate();

    const addToCart = (itemId,size)=>{
if(!size){
 
    toast.error("Please select a size")
    return;
}

        let cartData = structuredClone(cart);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }
            else{
                cartData[itemId] = {}
                cartData[itemId][size] = 1;
            }

            setCart(cartData);
    }


    const getCartAmount =   ()=>{
let totalAMout = 0;
for(const items in cart){

    let itemInfo = products.find((product)=>product._id === items);

    for(const item in cart[items]){
    
    
        try{
            if(cart[items][item] > 0){
                totalAMout += cart[items][item] * itemInfo.price;

            }
        }catch(error){

        }

    }

    return totalAMout;
}
    }
  const getCartCount = ()=>{
let count = 0;
for(const item in cart){
    for(const size in cart[item]){

        try{
            if(cart[item][size] > 0){
                count += cart[item][size];
            }

        }catch(error){

        }
    }
}

    return count;
  }


  const updateQuantity = async (itemId,size,quantity)=>{
    let cartData = structuredClone(cart);
    cartData[itemId][size] = quantity;
    setCart(cartData);


  }

    const value = {

        products, navigate,getCartAmount,updateQuantity, currency , delivery_fee , search , setSearch , showSearch,setShowSearch,addToCart,cart , getCartCount
    }


    return (
        <ShopContext.Provider value={value}>
{props.children}

        </ShopContext.Provider>
    )
}


export default ShopContextProvider;